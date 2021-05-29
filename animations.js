// Robot pose meaning:
// [palmo_x, palmo_y, palmo_z, finger_1_1, finger_1_2, finger_1_3, finger_2_1, finger_2_2, finger_2_3, finger_3_1, finger_3_2, finger_3_3, finger_4_1, finger_4_2, finger_4_3, thumb_1, thumb_2, thumb_3]
var pose =   [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0];

// Variables for transition from animations
var transPose;
var transition = false;

// Animation variables
var t = 0;
var tEnd = 200;
var actualAnimation = 'idle';

// Keyframes definition
var keyFrames = new Map([
    // [Time instant], [Pose]
    // Animation 0: Idle animation
    ['idle', [
        [0,      [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]],
        [25,     [1,      0,      1,   -2.5,      0,      0,     -5,    -10,    -10,    -10,      0,      0,     -5,    -10,    -10,   -7.5,     -5,   -7.5]],
        [50,     [2,      0,      2,     -5,    -10,    -10,    -10,    -20,    -20,    -20,    -10,    -10,    -10,    -20,    -20,    -15,    -10,    -15]],
        [100,    [0,      0,      0,    -10,    -20,    -20,     -5,    -10,    -10,    -10,    -20,    -20,     -5,    -10,    -10,    -30,    -20,    -30]],
        [150,    [-2,     0,     -2,     -5,    -10,    -10,      0,      0,      0,     -5,    -10,    -10,   -2.5,     -5,     -5,    -15,    -20,    -15]],
        [200,    [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]]
    ]],
    // Animation 1: Fingers hola
    ['hola', [
        [0,      [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]],
        [10,     [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,    -10,    -20,    -20,      0,      0,      0]],
        [20,     [0,      0,      0,      0,      0,      0,      0,      0,      0,    -10,    -20,    -20,    -20,    -40,    -40,      0,      0,      0]],
        [30,     [0,      0,      0,      0,      0,      0,    -10,    -20,    -20,    -20,    -40,    -40,    -10,    -20,    -20,      0,      0,      0]],
        [40,     [0,      0,      0,    -10,    -20,    -20,    -20,    -40,    -40,    -10,    -20,    -20,      0,      0,      0,      0,      0,      0]],
        [50,     [0,      0,      0,    -20,    -40,    -40,    -10,    -20,    -20,      0,      0,      0,      0,      0,      0,    -10,    -20,    -20]],
        [60,     [0,      0,      0,    -10,    -20,    -20,      0,      0,      0,      0,      0,      0,      0,      0,      0,    -20,    -40,    -40]],
        [70,     [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,    -10,    -20,    -20]],
        [80,     [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]]
    ]],
    // Animation 2: OK gesture
    ['ok_hand', [
        [0,      [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]],
        [15,     [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,    -25,    -10,    -10]],
        [30,     [0,      0,      0,    -40,    -20,      0,     -7,      0,      0,     -5,      0,      0,     -3,      0,      0,    -45,    -45,    -45]],
        [40,     [0,      0,      0,    -60,    -80,    -20,    -10,     -5,     -3,    -10,     -5,     -2,    -10,     -5,     -1,    -50,    -45,    -45]],
        [50,     [0,      0,      0,    -60,    -80,    -20,    -10,     -5,     -3,    -10,     -5,     -2,    -10,     -5,     -1,    -50,    -45,    -45]],
        [60,     [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]]
    ]],
    // Animation 3: Grasp test
    ['grasp', [
        [0,      [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]],
        [10,     [3,      0,      0,    -20,    -20,    -20,    -20,    -20,    -20,    -20,    -20,    -20,    -20,    -20,    -20,    -25,    -20,    -20]],
        [20,     [6,      0,      0,    -50,    -50,    -50,    -50,    -50,    -50,    -50,    -50,    -50,    -50,    -50,    -50,    -35,    -50,    -50]],
        [30,     [6,      0,      0,    -70,    -70,    -70,    -70,    -70,    -70,    -70,    -70,    -70,    -70,    -70,    -70,    -45,    -70,    -70]],
        [40,     [3,      0,      0,    -30,    -30,    -30,    -30,    -30,    -30,    -30,    -30,    -30,    -30,    -30,    -30,    -25,    -30,    -30]],
        [50,     [0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0,      0]]
    ]]

]);

// Maps with conditions for disable animations
var limits = new Map([
    ['hola', new Map([
        [2, new Map([
            [0.25, 5],
            [0.5, 1],
            [0.75, 1],
            [1.0, 1],
            [1.25, 1],
            [1.5, 1],
            [1.75, 1],
            [2.00, 1],
        ])]
    ])],
    ['ok_hand', new Map([
        [2, new Map([
            [0.25, 16],
            [0.5, 10],
            [0.75, 5],
            [1.0, 2],
            [1.25, 1],
            [1.5, 1],
            [1.75, 1],
            [2.0, 1]])],
    ])],
    ['grasp', new Map([
        [1, new Map([
            [0.25, 10],
            [0.5, 1],
            [0.75, 1],
            [1.0, 1],
            [1.25, 1],
            [1.5, 1],
            [1.75, 1],
            [2.00, 1]
        ])],
        [2, new Map([
            [0.25, 1],
            [0.5, 1],
            [0.75, 1],
            [1.0, 1],
            [1.25, 1],
            [1.5, 1],
            [1.75, 1],
            [2.00, 1]
        ])],
    ])]
])

// Map buttons id to animation types
var buttons = new Map([
    ['hola', "Button3"],
    ['ok_hand', "Button4"],
    ['grasp', "Button5"]
])

// Linear interpolation between the two salient frames
function getAnimationVal() {

    // Identify the two keyframe to use
    var k;
    for (k = 0; t >= keyFrames.get(actualAnimation)[k][0]; k++);

    // Store the two relevant keyframes in local variables
    var t1 = keyFrames.get(actualAnimation)[k - 1][0];
    var p1 = keyFrames.get(actualAnimation)[k - 1][1];

    var t2 = keyFrames.get(actualAnimation)[k][0];
    var p2 = keyFrames.get(actualAnimation)[k][1];

    // Compute linear interpolation between the two relevant frames for each component
    for (var i = 0; i < pose.length; i++) pose[i] = p1[i] + (t - t1) / (t2 - t1) * (p2[i] - p1[i]);
}

// Linear interpolation for smooth transition between different animations (specific case of the function above)
function getTransitionVal() {

    var t1 = 0;
    var p1 = transPose;

    var t2 = 25;
    var p2 = keyFrames.get(actualAnimation)[0][1];
    
    for (var i = 0; i < pose.length; i++) pose[i] = p1[i] + (t - t1) / (t2 - t1) * (p2[i] - p1[i]);
}

// Update the robot pose based on the animation timeline
function updatePose(){
    // Update time variable
    t += 1;

    //Handle end and restart of the animations
    if (t >= tEnd) {
        t = 0;
        if (transition) {
            transition = false;
            tEnd = keyFrames.get(actualAnimation)[keyFrames.get(actualAnimation).length-1][0];
        }
        else{
            if (actualAnimation != 'idle') {
                actualAnimation = 'idle';
                tEnd = keyFrames.get('idle')[keyFrames.get('idle').length-1][0];
            }
        }
    }
    
    // Compute the pose based on t and handle transition behaviour
    if (transition){
        getTransitionVal();
    }
    else getAnimationVal();

    // Apply the robot pose
    // Palm
    var palm = findNode('palm');
    if (palm) {
        palm.rotation[0] = pose[0];
        palm.rotation[1] = pose[1];
        palm.rotation[2] = pose[2];
    }

    // Fingers
    for (var j = 0; j < nFingers; j++) {
        var id = 'finger' + j.toString();
        for (var i = 1; i <= nPhal + 1; i++) {
            var node = findNode(id + '_' + i.toString() + '_1');
            if (node) {
                node.rotation[0] = pose[2 + (3*j) + i];
            }
        }
    }

    // Thumb
    if (isHumanoid) {
        // Move thumb base
        var node = findNode('thumb_base');
        node.rotation[1] = pose[pose.length - 3];
        // Move other phalanxes
        for (var i = 1; i <= thumbPhal + 1; i++) {
            node = findNode('thumb' + '_' + i.toString() + '_1');
            if (node) node.rotation[0] = pose[pose.length - 3 + i];
        }
    }
}

// Disable animations for particular model configurations
function checkValidAnimations() {
    if (isHumanoid) {
        toggleAnimation('ok_hand');
    } else document.getElementById(buttons.get('ok_hand')).disabled = true;
    if (!isHumanoid) {
        toggleAnimation('hola');
    } else document.getElementById(buttons.get('hola')).disabled = false;
    if (!isHumanoid) {
        toggleAnimation('grasp');
    } else document.getElementById(buttons.get('grasp')).disabled = false;
}

// Verify limits to see what animations must be disabled
function toggleAnimation(animation) {
    var l = limits.get(animation);
    if (l) {
        var jl = l.get(nPhal);
        if (jl) {
            var f = Number(scalings.get('falange_c'));
            if (jl.get(f) <= Number(scalings.get('falangina_c'))) {
                document.getElementById(buttons.get(animation)).disabled = true;
            } else {
                document.getElementById(buttons.get(animation)).disabled = false;
            }
        } else {
            document.getElementById(buttons.get(animation)).disabled = false;
        }
    } else {
        document.getElementById(buttons.get(animation)).disabled = false;
    }
}