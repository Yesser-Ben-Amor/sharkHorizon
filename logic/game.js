// Import der Models
import Player from '../models/player.class.js';

let canvas;
let ctx;
let character = new Image();
let player;

function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    initializeGame().catch(error => {
        console.error('Fehler bei der Spielinitialisierung:', error);
    });
    
    console.log('Game initialization started');
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
    return new Promise((resolve) => {
        character.onload = () => {
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