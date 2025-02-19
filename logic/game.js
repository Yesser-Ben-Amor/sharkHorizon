// Game Variablen
let canvas;
let ctx;
let character;
let player;
let enemies;

// Initialisierung
function init() {
    console.log('Game initialization started');
    try {
        canvas = document.getElementById('gameCanvas');
        ctx = canvas.getContext('2d');
        
        // Initialisiere Spielobjekte
        character = new Entity();  // Default-Werte werden verwendet (x=120, y=400)
        enemies = [
            new Fisch(100, 200, 1, 2, 10),  // x, y, größe, geschwindigkeit, punkte
            new Fisch(150, 300, 1, 2, 10),
            new Fisch(200, 400, 1, 2, 10),
            new Krake(300, 400, 10, 100),  // x, y, stärke, leben
        ];
        
        // Lade das Charakter-Bild
        character.src = 'views/img/1.Sharkie/1.IDLE/1.png';
        
        // Initialisiere den Spieler
        player = new Player('Player1');
        player.ladePlayerDaten().catch(function(error) {
            console.error('Fehler beim Laden der Spielerdaten:', error);
        });
        
        // Starte den Game Loop sobald das Bild geladen ist
        character.onload = function() {
            console.log('Character image loaded');
            gameLoop();
        };
    } catch (error) {
        console.error('Fehler bei der Spielinitialisierung:', error);
    }
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

// Event Listener für Spielstart
window.addEventListener('load', init);