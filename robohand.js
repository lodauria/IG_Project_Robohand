"use strict";

var canvas;
var gl;
var program;

// Push triangle informations
function triangle(vert, a, b, c, normals, i, texcoords, x, y, z) {
    pointsArray.push(vert[a]);
    normalsArray.push(normals[i]);
    texCoordsArray.push(texcoords[x]);

    pointsArray.push(vert[b]);
    normalsArray.push(normals[i]);
    texCoordsArray.push(texcoords[y]);

    pointsArray.push(vert[c]);
    normalsArray.push(normals[i]);
    texCoordsArray.push(texcoords[z]);
}

// Standard texture configuration
function configureTexture(image, type) {
    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    textures.set(type, tex);
}

// Select the texture to use
function useTexture(i) {
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textures.get(materials_map.get(i)));
    gl.uniform1i(gl.getUniformLocation(program, "uTexMap"), 0);
}

// Set the material to use
function setupMaterial(type) {
    var m = materials.get(materials_map.get(type));
    var ambientProduct = mult(lightAmbient, m.ambient);
    var diffuseProduct = mult(lightDiffuse, m.diffuse);
    var specularProduct = mult(lightSpecular, m.specular);

    // Update material on GPU
    gl.uniform4fv(gl.getUniformLocation(program, "uAmbientProduct"), ambientProduct);
    gl.uniform4fv(gl.getUniformLocation(program, "uDiffuseProduct"), diffuseProduct);
    gl.uniform4fv(gl.getUniformLocation(program, "uSpecularProduct"), specularProduct);
    gl.uniform1f(gl.getUniformLocation(program, "uShininess"), m.shininess);
}

// Traverse the tree
function traverse(element) {
    var id = element.id;
    if (id == null) return;
    stack.push(modelViewMatrix);
    element.updateTransform();
    modelViewMatrix = mult(modelViewMatrix, element.transform);
    nMatrix = normalMatrix(modelViewMatrix, true );
    gl.uniformMatrix3fv(nMatrixLoc, false, flatten(nMatrix));
    if (!element.isGroup) {
        drawElement(element);
    }
    for (var i = 0; i < element.childs.length; i++) {
        var child = element.childs[i];
        traverse(child);
        modelViewMatrix = stack.pop();
    }
}

// Generic node rendering
function drawElement(element) {
    var s = scalings.get(element.type) ? scalings.get(element.type) : 1;
    var instanceMatrix = mat4();
    instanceMatrix = mult(modelViewMatrix, scale(1, s, 1));
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(instanceMatrix));
    // Setup material
    setupMaterial(element.type);
    // Update texture to use
    useTexture(element.type);
    // Draw in the canvas
    gl.drawArrays(gl.TRIANGLES, boundsMap.get(element.type)[0], boundsMap.get(element.type)[1]);
}

// Run the 'value' function and update the boundsMap
function addBounds(value, key) {
    var i = pointsArray.length;
    value();
    boundsMap.set(key, [i, pointsArray.length - i]);
}

// Initialization function
window.onload = function init() {
    // Load sounds
    initSounds();

    // Initialization
    canvas = document.getElementById("gl-canvas");
    gl = canvas.getContext('webgl2');
    if (!gl) { alert("WebGL 2.0 isn't available"); }
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);    

    // Use shaders
    program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Setup canvas based on window configuration
    adaptCanvas();

    // Matrices locations
    projectionMatrixLoc = gl.getUniformLocation(program, "uProjectionMatrix");
    modelViewMatrixLoc = gl.getUniformLocation(program, "uModelViewMatrix")
    
    // Push background data
    background();

    // Create boundings and populate buffers
    elements.forEach(addBounds);
        
    // Points buffer
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(pointsArray), gl.STATIC_DRAW);
    var positionLoc = gl.getAttribLocation(program, "aPosition");
    gl.vertexAttribPointer(positionLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionLoc);

    // Normals buffer
    var nBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(normalsArray), gl.STATIC_DRAW);
    var normalLoc = gl.getAttribLocation(program, "aNormal");
    gl.vertexAttribPointer(normalLoc, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(normalLoc);
    nMatrixLoc = gl.getUniformLocation(program, "uNormalMatrix");
    
    // Texture buffer
    var tBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(texCoordsArray), gl.STATIC_DRAW);
    var texCoordLoc = gl.getAttribLocation(program, "aTexCoord");
    gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texCoordLoc);

    // Textures initialization
    configureTexture(document.getElementById("aluminium"), 'aluminium');
    configureTexture(document.getElementById("background"), 'background');
    configureTexture(document.getElementById("base"), 'base');
    configureTexture(document.getElementById("blue_plastic"), 'blue_plastic');
    configureTexture(document.getElementById("carbon_fiber"), 'carbon_fiber');
    configureTexture(document.getElementById("carbon_fiber_palm"), 'carbon_fiber_palm');
    configureTexture(document.getElementById("ergal"), 'ergal');
    configureTexture(document.getElementById("gold"), 'gold');
    configureTexture(document.getElementById("grey_plastic"), 'grey_plastic');
    configureTexture(document.getElementById("steel"), 'steel');
    configureTexture(document.getElementById("white_plastic"), 'white_plastic');
    
    // Variable for a particular behaviour for the background
    uBackLoc = gl.getUniformLocation(program, "uBack");

    // Initialize scene
    scene.push(isHumanoid ? humanoidStartingModel() : roboticStartingModel());
    
    // Light position
    gl.uniform4fv(gl.getUniformLocation(program, "uLightPosition"), lightPosition);
    
    // Configure events and adjust UI
    setEvents();
    document.getElementById("n_fingers").innerHTML = (isHumanoid ? nFingers + 1 : nFingers);
    document.getElementById("fingers").value = (isHumanoid ? nFingers + 1 : nFingers);

    // Set cron job for animations
    setInterval(updatePose, 50);

    // Render
    render();
}

// Background special draw
function drawBackground() {
    gl.uniform1i(uBackLoc, false);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, textures.get('background'));
    gl.uniform1i(gl.getUniformLocation(program, "uTexMap"), 0);
    gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
    gl.uniform1i(uBackLoc, true);
}

// Render function
var render = function () {
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Background drawing
    drawBackground();

    // Projection matrix
    projectionMatrix = perspective(fovy, aspect, near, far);
    gl.uniformMatrix4fv(projectionMatrixLoc, false, flatten(projectionMatrix));
    
    // ModelViewMatrix computation
    eye = vec3(zoom * Math.sin(theta) * Math.cos(phi), zoom * Math.sin(phi), zoom * Math.cos(theta) * Math.cos(phi));
    modelViewMatrix = lookAt(eye, at, up);
    modelViewMatrixLoc = gl.getUniformLocation(program, "uModelViewMatrix");
    gl.uniformMatrix4fv(modelViewMatrixLoc, false, flatten(modelViewMatrix));

    // Normals update
    nMatrix = normalMatrix(modelViewMatrix, true );
    gl.uniformMatrix3fv(nMatrixLoc, false, flatten(nMatrix));
    
    // Traverse tree for drawing all the elements
    scene.forEach(traverse);

    requestAnimationFrame(render);
}
