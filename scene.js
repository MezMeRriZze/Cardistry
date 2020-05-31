"use strict";
var CARD_HEIGHT = 3.5; // 3.5 inch height.
var CARD_WIDTH = 2.5; // 2.5 inch width.
var CARD_THICKNESS = 0.01157; // Thickness of standard BICYCLE card.
var NUMBER_OF_CARDS = 1;


function setupCard(THREE, shaderMaterial) {
    var card_model = new THREE.Mesh(new THREE.BoxGeometry(CARD_HEIGHT, CARD_WIDTH, CARD_THICKNESS), shaderMaterial);
    return card_model;
}

// Setup the cards as an uncut card paper.
function setupUncut(cards) {
    return;
}

// Setup the cards for left thumb fan.
function setupThumbFan(cards) {
    return;
}

// Setup the cards for anaconda dribble.
function setupAnacondaDribble(cards) {
    return;
}

// Setup the cards for spring.
function setupSpring(cards) {
    return;
}

// Setup the cards for one hand fan.
function setupOneHandFan(cards) {
    return;
}

// Setup the cards for table spread.
function setupTableSpread(cards) {
    return;
}

function setupScene(scene_type, scene, THREE, shaderMaterial) {
    var cards = [];
    for ( var i = 0 ; i < NUMBER_OF_CARDS ; ++ i ) {
        var card = setupCard(THREE, shaderMaterial);
        cards.push(card);
    }
    if (scene_type == 'thumb_fan') {
        setupThumbFan(cards);
    }
    for ( i = 0 ; i < NUMBER_OF_CARDS ; ++ i ) {
        scene.add(cards[i]);
    }
}