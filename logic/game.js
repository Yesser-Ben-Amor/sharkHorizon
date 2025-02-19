// Import der Models
import { Entity } from '../models/entity.class.js';
import { Krake } from '../models/krake.class.js';
import { Player } from '../models/player.class.js';
import { Fisch } from '../models/fisch.class.js';

// Game Variablen
let canvas;
let ctx;
let character = new Entity();  // Default-Werte werden verwendet (x=120, y=400)
let player;
let enemies = [
    new Fisch(100, 200, 1, 2, 10),  // x, y, größe, geschwindigkeit, punkte
    new Fisch(150, 300, 1, 2, 10),
    new Fisch(200, 400, 1, 2, 10),
    new Krake(300, 400, 10, 100),  // x, y, stärke, leben
];

function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    initializeGame().catch(function(error) {
        console.error('Fehler bei der Spielinitialisierung:', error);
    });
    
    console.log('Game initialization started');
    console.log('My character:', character);

}

async function initializeGame() {
    // Lade das Charakter-Bild
    character.src = 'views/img/1.Sharkie/1.IDLE/1.png';
    
    // Initialisiere den Spieler
    player = new Player('Player1');
    try {
        await player.ladePlayerDaten();
        console.log('Spielerdaten geladen');
    } catch (error) {
        console.error('Fehler beim Laden der Spielerdaten:', error);
    }
    
    // Starte den Game Loop sobald das Bild geladen ist
    return new Promise(function(resolve) {
        character.onload = function() {
            console.log('Character image loaded');
            gameLoop();
            resolve();
        };
    });
}

// Game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw character in the canvas
    let x = 20;
    let y = 20;
    let z = 150;
    let w = 350;
    ctx.drawImage(character, x, y, z, w);
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}

// Exportiere die init Funktion
export { init };