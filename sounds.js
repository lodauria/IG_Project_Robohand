// All possible sounds
var sounds = new Map();

// Audio on/off
// Note: we start with audio off for cross-browser integration
var canPlay = false;

// Get all sounds initialized
function initSounds() {
    sounds.set('background_music', new Audio(document.getElementById("background_music").src));
    sounds.set('shorter_drill', new Audio(document.getElementById("shorter_drill").src));
    sounds.set('short_drill', new Audio(document.getElementById("short_drill").src));
    sounds.set('med_drill', new Audio(document.getElementById("med_drill").src));
    sounds.set('long_drill', new Audio(document.getElementById("long_drill").src));
    sounds.set('scale_b', new Audio(document.getElementById("scale01").src));
    sounds.set('scale_t', new Audio(document.getElementById("scale02").src));
}

// Reproduce a sound
function playSound(sound, repeat = false, volume = 0.2) {
    var audio = sounds.get(sound);
    audio.loop = repeat;
    audio.volume = volume;
    if (canPlay) audio.play();
}

// Stop an active sound
function stopSound(sound) {
    var audio = sounds.get(sound);
    audio.pause();
}