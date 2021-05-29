// Mouse click trigger
var trigger;

// Adapt the canvas to the window in the best way
function adaptCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.uniform1f(gl.getUniformLocation(program, "wF"), window.innerWidth/500.0);
    gl.uniform1f(gl.getUniformLocation(program, "hF"), window.innerHeight/500.0);
    gl.viewport(0, 0, canvas.width, canvas.height);
    aspect = canvas.width/canvas.height;
}

// All events from the page
function setEvents() {
    // Adapt canvas when there is a window resize
    window.addEventListener("resize", adaptCanvas);

    // Reset view button
    document.getElementById("Button1").onclick = function (event) {
        zoom = 180.0;
        theta = 30.0 * Math.PI / 180.0;
        phi = 30.0 * Math.PI / 180.0;
        at = vec3(0.0, 26.0, 0.0);
    };

    // Audio toggle button
    document.getElementById("toggleAudio").onclick = function (event) {
        canPlay = !canPlay;
        document.getElementById("toggleAudio").innerHTML = 'Audio ' + (canPlay ? 'ON' : 'OFF');
        if (canPlay) playSound('background_music', true, 0.1);
        else stopSound('background_music');
    };
    
    // Change end effector type (human/robotic)
    document.getElementById("Button2").onclick = function (event) {
        // Play sound
        playSound('long_drill');

        // Modify scene
        isHumanoid = !isHumanoid;
        scene = [];
        nFingers = 0;
        nPhal = 0;
        thumbPhal = 0;
        scene.push(isHumanoid ? humanoidStartingModel() : roboticStartingModel());

        // Frontend corrections
        if (!isHumanoid) document.getElementById("Button2").textContent = "Robotic hand";
        if (isHumanoid) document.getElementById("Button2").textContent = "Humanoid hand";

        // Number of fingers slider correction
        var slider = document.getElementById("fingers");
        if (isHumanoid) {
            document.getElementById("n_fingers").textContent = (nFingers + 1).toString();
            slider.max = 5;
            slider.value = nFingers + 1;
        } else {
            document.getElementById("n_fingers").textContent = nFingers.toString();
            slider.max = 4;
            slider.value = nFingers;
        }

        // Number of phalanxes slider correction
        var slider2 = document.getElementById('phalanx');
        slider2.value = nPhal;
        document.getElementById("n_phal").textContent = nPhal.toString();

        // Check for valid animations
        checkValidAnimations();
    };

    // Number of fingers slider
    document.getElementById("fingers").onchange = function (event) {
        // Play sound
        playSound('med_drill');
        
        // Modify number of fingers
        var delta = document.getElementById("fingers").value - (isHumanoid ? nFingers + 1 : nFingers);
        while (delta > 0){
            addFinger('appendages');
            delta -= 1;
        }
        while (delta < 0){
            removeFinger('appendages');
            delta += 1;
        }
        // Frontend corrections
        document.getElementById("n_fingers").innerHTML = (isHumanoid ? nFingers + 1 : nFingers);

        // Check for valid animations
        checkValidAnimations();
    };

    // Number of phalanxes slider
    document.getElementById("phalanx").onchange = function (event) {
        // Play sound
        playSound('shorter_drill');

        // Modify number of phalanxes
        var delta = document.getElementById("phalanx").value - nPhal;
        var diff = delta;
        while (delta > 0) {
            if (isHumanoid && thumbPhal < 1) {
                addPhalanx('thumb');
                thumbPhal += 1;
            }
            for (var i = 0; i < nFingers; i++) {
                var id = 'finger' + i.toString();
                addPhalanx(id);
            }
            delta -= 1;
        }
        while (delta < 0) {
            if (isHumanoid && ((nPhal === thumbPhal) || (delta === -2))) {
                removePhalanx('thumb');
                thumbPhal -= 1;
            }
            for (var i = 0; i < nFingers; i++) {
                var id = 'finger' + i.toString();
                removePhalanx(id);
            }
            delta += 1;
        }
        // Frontend corrections
        nPhal += diff;
        document.getElementById("n_phal").innerHTML = nPhal;

        // Check for valid animations
        checkValidAnimations();
    };

    // Phalanx scaling slider
    document.getElementById("phalanx_scale").onchange = function (event) {
        // Play sound
        playSound('scale_b');
        var new_scale = document.getElementById("phalanx_scale").value;
        scalings.set('falange_c', new_scale);
        document.getElementById("phalanx_scale_factor").innerHTML = new_scale*100;

        // Check for valid animations
        checkValidAnimations();
    };

    // Finger tip scaling slider
    document.getElementById("top_phalanx_scale").onchange = function (event) {
        // Play sound
        playSound('scale_t');
        var new_scale = document.getElementById("top_phalanx_scale").value;
        scalings.set('falangina_c', new_scale);
        document.getElementById("top_phalanx_scale_factor").innerHTML = new_scale*100;

        // Check for valid animations
        checkValidAnimations();
    };

    // Set fingers hola animation
    document.getElementById("Button3").onclick = function (event) {
        actualAnimation = 'hola';
        transPose = pose.slice();
        transition = true;
        t = 0;
        tEnd = 25;
    };

    // Set OK gesture animation
    document.getElementById("Button4").onclick = function (event) {
        actualAnimation = 'ok_hand';
        transPose = pose.slice();
        transition = true;
        t = 0;
        tEnd = 25;
    };

    // Set grasp animation
    document.getElementById("Button5").onclick = function (event) {
        actualAnimation = 'grasp';
        transPose = pose.slice();
        transition = true;
        t = 0;
        tEnd = 25;
    };

    // Fancy preset
    document.getElementById("Button6").onclick = function (event) {
        // Play sound
        playSound('short_drill');

        materials_map.set('palmo_h', 'carbon_fiber_palm');
        materials_map.set('palmo_r', 'carbon_fiber_palm');
        materials_map.set('pollice', 'carbon_fiber_palm');
        document.getElementById("palm_app").value = 1;

        materials_map.set('perno_f', 'ergal');
        materials_map.set('perno_m', 'ergal');
        materials_map.set('perno_p', 'ergal');
        document.getElementById("perno_app").value = 1;

        materials_map.set('falange_c', 'gold');
        materials_map.set('falangina_c', 'gold');
        materials_map.set('falangina_t', 'gold');
        document.getElementById("finger_app").value = 3;
    };

    // Cheap preset
    document.getElementById("Button7").onclick = function (event) {
        // Play sound
        playSound('short_drill');

        materials_map.set('palmo_h', 'blue_plastic');
        materials_map.set('palmo_r', 'blue_plastic');
        materials_map.set('pollice', 'blue_plastic');
        document.getElementById("palm_app").value = 3;

        materials_map.set('perno_f', 'grey_plastic');
        materials_map.set('perno_m', 'grey_plastic');
        materials_map.set('perno_p', 'grey_plastic');
        document.getElementById("perno_app").value = 3;

        materials_map.set('falange_c',   'white_plastic');
        materials_map.set('falangina_c', 'white_plastic');
        materials_map.set('falangina_t', 'white_plastic');
        document.getElementById("finger_app").value = 1;
    };

    // Palm material selection
    document.getElementById("palm_app").onchange = function (event) {
        // Play sound
        playSound('short_drill');

        switch (event.target.selectedIndex) {
            case 0:
                materials_map.set('palmo_h', 'carbon_fiber_palm');
                materials_map.set('palmo_r', 'carbon_fiber_palm');
                materials_map.set('pollice', 'carbon_fiber_palm');
                break;
            case 1:
                materials_map.set('palmo_h', 'steel');
                materials_map.set('palmo_r', 'steel');
                materials_map.set('pollice', 'steel');
                break;
            case 2:
                materials_map.set('palmo_h', 'blue_plastic');
                materials_map.set('palmo_r', 'blue_plastic');
                materials_map.set('pollice', 'blue_plastic');
                break;
            default:
                break;
        }
    };

    // Perno material selection
    document.getElementById("perno_app").onchange = function (event) {
        // Play sound
        playSound('short_drill');

        switch (event.target.selectedIndex) {
            case 0:
                materials_map.set('perno_f', 'ergal');
                materials_map.set('perno_m', 'ergal');
                materials_map.set('perno_p', 'ergal');
                break;
            case 1:
                materials_map.set('perno_f', 'aluminium');
                materials_map.set('perno_m', 'aluminium');
                materials_map.set('perno_p', 'aluminium');
                break;
            case 2:
                materials_map.set('perno_f', 'grey_plastic');
                materials_map.set('perno_m', 'grey_plastic');
                materials_map.set('perno_p', 'grey_plastic');
                break;
            default:
                break;
        }
    };

    // Finger material selection
    document.getElementById("finger_app").onchange = function (event) {
        // Play sound
        playSound('short_drill');

        switch (event.target.selectedIndex) {
            case 0:
                materials_map.set('falange_c', 'white_plastic');
                materials_map.set('falangina_c', 'white_plastic');
                materials_map.set('falangina_t', 'white_plastic');
                break;
            case 1:
                materials_map.set('falange_c', 'carbon_fiber');
                materials_map.set('falangina_c', 'carbon_fiber');
                materials_map.set('falangina_t', 'carbon_fiber');
                break;
            case 2:
                materials_map.set('falange_c', 'gold');
                materials_map.set('falangina_c', 'gold');
                materials_map.set('falangina_t', 'gold');
                break;
            default:
                break;
        }
    };

    // Listeners for scene view
    // Zoom with mouse wheel
    canvas.addEventListener("wheel", function (event) {
        zoom += event.deltaY;
        if (zoom > 600) zoom = 600;
        if (zoom < 80) zoom = 80;
    }, true);

    // Move in the scene with mouse drag
    canvas.addEventListener("mousedown", function (event) {trigger = true;}, true);
    window.addEventListener("mouseup", function (event) {trigger = false;}, true);
    window.addEventListener("mousemove", function (event) {
        if (trigger == true){
            theta -= event.movementX/10.0 * dr;
            phi += event.movementY/15.0 * dr;
            if (phi < -1.5) phi = -1.5;
            if (phi >  1.5) phi = 1.5;

        }
    }, true);

    // Move camera framing with arrow keys
    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 37) {
            at[0] += 2.0 * Math.cos(theta);
            at[2] += -2.0 * Math.sin(theta);
        }
        if (event.keyCode == 39) {
            at[0] -= 2.0 * Math.cos(theta);
            at[2] -= -2.0 * Math.sin(theta);
        }
        if (event.keyCode == 38) at[1] -= 2.0;
        if (event.keyCode == 40) at[1] += 2.0;
    }, true);
}