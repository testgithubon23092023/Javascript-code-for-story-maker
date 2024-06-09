// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.querySelector('#speak-btn');

// Arrays for random words
var nouns = ['bird', 'fish', 'bicycle', 'flower', 'building'];
var verbs = ['swims', 'dances', 'drives', 'reads', 'writes'];
var adjectives = ['bright', 'dark', 'quick', 'quiet', 'large'];
var moreNouns = ['chair', 'laptop', 'tablet', 'lamp', 'notebook'];
var places = ['garden', 'library', 'gym', 'market', 'cafe'];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
    var utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

function pickRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateStory() {
    document.getElementById('story-text').textContent = textToSpeak;
}

function addWordToStory(array) {
    textToSpeak += pickRandomWord(array) + ' ';
    updateStory();
}

function generateRandomStory() {
    textToSpeak = pickRandomWord(nouns) + ' ' + pickRandomWord(verbs) + ' ' + pickRandomWord(adjectives) + ' ' + pickRandomWord(moreNouns) + ' ' + pickRandomWord(places);
    updateStory();
}

function resetStory() {
    textToSpeak = '';
    updateStory();
}

/* Event Listeners
-------------------------------------------------- */
document.getElementById('noun-btn').addEventListener('click', function() {
    addWordToStory(nouns);
});

document.getElementById('verb-btn').addEventListener('click', function() {
    addWordToStory(verbs);
});

document.getElementById('adj-btn').addEventListener('click', function() {
    addWordToStory(adjectives);
});

document.getElementById('noun2-btn').addEventListener('click', function() {
    addWordToStory(moreNouns);
});

document.getElementById('place-btn').addEventListener('click', function() {
    addWordToStory(places);
});

speakButton.onclick = function() {
    speakNow(textToSpeak);
};

document.getElementById('random-story-btn').addEventListener('click', function() {
    generateRandomStory();
});

document.getElementById('reset-btn').addEventListener('click', function() {
    resetStory();
});
