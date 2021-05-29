// Variables
var nFingers = 0;
var nPhal = 0;
var thumbPhal = 0;
var isHumanoid = true;

// Get the next finger's id and update the number of fingers
function getNextFingerId() {
    var s = 'finger' + nFingers.toString();
    nFingers += 1;
    return s;
}

// Fingers allignment function, both for humanoid and for robotic hand
function allignFingers(fingers) {
    if (isHumanoid) {
        // Special case: only one finger
        if (fingers.length === 1) {
            fingers[0].position[0] = 0;
        }
        else {
            // Compute new distance for each finger
            var fingerDistance = (2*palmoL) / (nFingers-1);
            // Update other fingers position accordingly
            for (var i = 0; i < fingers.length; i++) {
                fingers[i].position[0] = -palmoL + (i * fingerDistance);
            }
        }
    }
    // Premapped position depending on palmo radius
    else {
        if (fingers.length === 2) {
            // Opposite sides, facing the center
            fingers[0].position[0] = 0;
            fingers[0].position[2] = palmoR;
            fingers[0].rotation[1] = 180;

            fingers[1].position[0] = 0;
            fingers[1].position[2] = -palmoR;
            fingers[1].rotation[1] = 0;
        }
        else if (fingers.length == 3) {
            // 120° delta angle, facing the center
            fingers[0].position[0] = palmoR * Math.cos(0 * Math.PI / 180);
            fingers[0].position[2] = 0;
            fingers[0].rotation[1] = 90;

            fingers[1].position[0] = palmoR * Math.cos(120 * Math.PI / 180);
            fingers[1].position[2] = palmoR * Math.sin(120 * Math.PI / 180);
            fingers[1].rotation[1] = 210;

            fingers[2].position[0] = palmoR * Math.cos(-120 * Math.PI / 180);
            fingers[2].position[2] = palmoR * Math.sin(-120 * Math.PI / 180);
            fingers[2].rotation[1] = -30;
        }
        else if (fingers.length == 4) {
            // 90° delta angle, facing the center
            fingers[0].position[0] = 0;
            fingers[0].position[2] = palmoR;
            fingers[0].rotation[1] = 180;

            fingers[1].position[0] = palmoR;
            fingers[1].position[2] = 0;
            fingers[1].rotation[1] = 90;

            fingers[2].position[0] = 0;
            fingers[2].position[2] = -palmoR;
            fingers[2].rotation[1] = 0;

            fingers[3].position[0] = -palmoR;
            fingers[3].position[2] = 0;
            fingers[3].rotation[1] = -90;
        }
    }
}

// Create a falange, returns [perno_m, perno_f]
// Node is the perno id
function getFalange(node, position = vec3(0.0, 0.0, 0.0), rotation = vec3(0.0, 0.0, 0.0), index = 1) {
    var base_id = node + '_' + index.toString();
    var a = createNode(base_id + '_1', 'perno_m', false, position, rotation);
    var b = createNode(base_id + '_2', 'falange_c', false, vec3(0.0, pernoToFalange, 0.0), vec3(0.0, 0.0, 0.0));
    var c = createNode(base_id + '_3', 'perno_f', false, vec3(0.0, falangeH, 0.0), vec3(0.0, 0.0, 0.0));
    b.childs.push(c);
    a.childs.push(b);
    return [a, c];
}

// Create a falange, returns [perno_m, falangina_t]
// Node is the perno id
function getFalangina(node, index = 1, position = vec3(0.0, 0.0, 0.0), rotation = vec3(0.0, 0.0, 0.0)) {
    var base_id = node + '_' + index.toString();
    var a = createNode(base_id + '_1', 'perno_m', false, position, rotation);
    var b = createNode(base_id + '_2', 'falangina_c', false, vec3(0.0, pernoToFalange, 0.0), vec3(0.0, 0.0, 0.0));
    var c = createNode(base_id + '_3', 'falangina_t', false, vec3(0.0, falanginaCToT, 0.0), vec3(0.0, 0.0, 0.0));
    b.childs.push(c);
    a.childs.push(b);
    return [a, c];
}

// Updates a single id, +1 or -1
function updateID(id, inc) {
    var n = Array.from(id);
    var newIndex = (Number(n[n.length - 3]) + (inc ? 1 : -1)).toString();
    n[n.length - 3] = newIndex;
    return n.join('');
}

// Update the id of a phalanx and of all its childs
function updatePhalanxID(node, inc = true) {
    node.id = updateID(node.id, inc);
    for (var i = 0; i < node.childs.length; i++) {
        updatePhalanxID(node.childs[i], inc);
    }
}

// Add a finger to the node
function addFinger(node = 'appendages') {
    var node = findNode(node);
    // Check valid number of fingers
    if (nFingers < 4) {
        var newFinger = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, isHumanoid ? palmoToPernoH : palmoToPernoR, fingerDispZ), vec3(0.0, 0.0, 0.0));
        var falange = getFalangina(newFinger.id)[0];
        newFinger.childs.push(falange);
        node.childs.push(newFinger);
        // Add phalanxes
        for (var i = 0; i < nPhal; i++) {
            addPhalanx(newFinger.id);
        }
        // Reallign fingers
        allignFingers(node.childs);
    }
}

// Remove a finger from the node
function removeFinger(node = 'appendages') {    
    var node = findNode(node);
    // Check valid number of fingers
    if ((isHumanoid && nFingers > 1) || (!isHumanoid && nFingers > 2)) {
        node.childs.pop();
        nFingers -= 1;
        // Reallign fingers
        allignFingers(node.childs);
    }
}

// Add a phalanx to the finger
// Finger is the perno id of the finger
function addPhalanx(finger) {
    var prev = findNode(finger);
    var next = prev.childs[0];
    // Get number of phalanxes
    var c = Number(next.id.slice(-1));
    if (c < 4) {
        // Update end phalanx id
        updatePhalanxID(next);
        // Update end phalanx position
        next.position[1] = falangeH + pernoToFalange;
        // Create new phalanx
        var f = getFalange(finger, vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0), 1);
        var b = f[0];
        var e = f[1];
        // Update hierarchy
        // Note: we add the new phalanx to the base and push the others
        e.childs.push(prev.childs[0]);
        prev.childs[0] = b;
    }
}

// Remove a phalanx from the finger
// Finger is the perno id of the finger
function removePhalanx(finger) {
    var base = findNode(finger);
    var next = findNode(finger + '_2_1');
    if (nPhal > 0) {
        // Update hierarchy
        // Note: we pull the next phalanx to the base
        base.childs[0] = next;
        // Update ids
        updatePhalanxID(next, false);
        // Correct position
        next.position[1] = 0.0;
    }
}

// Get the starting model for the humanoid hand
function humanoidStartingModel() {
    // Create nodes
    var base = createNode('base', 'base', false, vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0));
    var palm = createNode('palm', 'palmo_h', false, vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0));
    
    var thumb_base = createNode('thumb_base', 'pollice', false, vec3(thumbBaseDispX, thumbBaseDispY, 0.0), vec3(0.0, 0.0, 0.0));
    var thumb = createNode('thumb', '', true, vec3(thumbDispX, thumbDispY, 0.0), vec3(0.0, 0.0, thumbAngZ));
    var thumb_f1 = getFalange(thumb.id);
    var thumb_f2 = getFalangina(thumb.id, 2, vec3(0.0, falangeH + pernoToFalange, 0.0))[0];

    var appendages = createNode('appendages', '', true);

    var perno1 = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, palmoToPernoH, fingerDispZ), vec3(0.0, 0.0, 0.0));
    var falange11 = getFalange(perno1.id);
    var falange12 = getFalangina(perno1.id, 2, vec3(0.0, falangeH + pernoToFalange, 0.0))[0];

    var perno2 = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, palmoToPernoH, fingerDispZ), vec3(0.0, 0.0, 0.0));
    var falange21 = getFalange(perno2.id);
    var falange22 = getFalangina(perno2.id, 2, vec3(0.0, falangeH + pernoToFalange, 0.0))[0];

    var perno3 = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, palmoToPernoH, fingerDispZ), vec3(0.0, 0.0, 0.0));
    var falange31 = getFalange(perno3.id);
    var falange32 = getFalangina(perno3.id, 2, vec3(0.0, falangeH + pernoToFalange, 0.0))[0];

    var perno4 = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, palmoToPernoH, fingerDispZ), vec3(0.0, 0.0, 0.0));
    var falange41 = getFalange(perno4.id);
    var falange42 = getFalangina(perno4.id, 2, vec3(0.0, falangeH + pernoToFalange, 0.0))[0];
    
    // Create hierarchy
    thumb_f1[1].childs.push(thumb_f2);
    thumb.childs.push(thumb_f1[0]);
    thumb_base.childs.push(thumb);

    falange11[1].childs.push(falange12);
    perno1.childs.push(falange11[0]);
    appendages.childs.push(perno1);

    falange21[1].childs.push(falange22);
    perno2.childs.push(falange21[0]);
    appendages.childs.push(perno2);

    falange31[1].childs.push(falange32);
    perno3.childs.push(falange31[0]);
    appendages.childs.push(perno3);

    falange41[1].childs.push(falange42);
    perno4.childs.push(falange41[0]);
    appendages.childs.push(perno4);

    palm.childs.push(thumb_base);
    palm.childs.push(appendages);

    base.childs.push(palm);

    // Allign the fingers
    allignFingers(appendages.childs);

    // Setup variables
    nPhal = 1;
    thumbPhal = 1;

    return base;
}

// Get the starting model for the robotic hand
function roboticStartingModel() {
    // Create nodes
    var base = createNode('base', 'base', false, vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0));
    var palm = createNode('palm', 'palmo_r', false, vec3(0.0, 0.0, 0.0), vec3(0.0, 0.0, 0.0));
    
    var appendages = createNode('appendages', '', true);

    var perno1 = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, palmoToPernoR, palmoR), vec3(0.0, 0.0, 0.0));
    var falange1 = getFalangina(perno1.id)[0];

    var perno2 = createNode(getNextFingerId(), 'perno_p', false, vec3(0.0, palmoToPernoR, -palmoR), vec3(0.0, 0.0, 0.0));
    var falange2 = getFalangina(perno2.id)[0];

    // Create hierarchy
    perno1.childs.push(falange1);
    appendages.childs.push(perno1);

    perno2.childs.push(falange2);
    appendages.childs.push(perno2);

    palm.childs.push(appendages);

    base.childs.push(palm);
    
    // Allign the fingers
    allignFingers(appendages.childs);

    // Setup variables
    nPhal = 0;
    thumbPhal = 0;

    return base;
}