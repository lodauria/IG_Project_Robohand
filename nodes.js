// Hierarchical model variables
var stack = [];
var scene = [];

// Updates the transform matrix of the node
function getTransformMatrix(m, position, angle, rotation, type) {
    // Update position based on previous node scale
    var s = 1;
    if (type === 'perno_f') {
        s = scalings.get('falange_c') - 1;
    } else if (type === 'falangina_t') {
        s = scalings.get('falangina_c');
    }
    // Position
    m = mult(m, translate(position[0], position[1] * s, position[2]));
    // Rotations
    m = mult(m, rotate(angle[0], vec3(1, 0, 0)));
    m = mult(m, rotate(angle[1], vec3(0, 1, 0)));
    m = mult(m, rotate(angle[2], vec3(0, 0, 1)));
    m = mult(m, rotate(rotation[0], vec3(1, 0, 0)));
    m = mult(m, rotate(rotation[1], vec3(0, 1, 0)));
    m = mult(m, rotate(rotation[2], vec3(0, 0, 1)));
    return m;
}

// Find a node by its id from a starting element
function findNode(id, element = scene[0]) {
    if (element.id === id) return element;
    else for (var i = 0; i < element.childs.length; i++) {
        var v = findNode(id, element.childs[i]);
        if (v != null) return v;
    }
    return null;
}

// Create a node
function createNode(id, type, isGroup, position = [0,0,0], angle = [0,0,0]) {
    var node = {
        id: id,
        type: type,
        isGroup: isGroup,  // If it's a group of nodes, it shouldn't be rendered
        transform: mat4(),
        childs: [],
        position: position,
        angle: angle,
        rotation: [0,0,0],
        updateTransform: function() {
            this.transform = getTransformMatrix(mat4(), this.position, this.angle, this.rotation, this.type)
        }
    }
    return node;
}