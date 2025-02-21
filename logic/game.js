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
        character = new Hai(120, 400, 1, 1);  // x, y, größe, geschwindigkeit
        enemies = [
            new Fisch(100, 200, 1, 2, 10),  // x, y, größe, geschwindigkeit, punkte
            new Fisch(150, 300, 1, 2, 10),
            new Fisch(200, 400, 1, 2, 10),
            new Krake(300, 400, 10, 100),  // x, y, stärke, leben
        ];
        console.log('Character:', character);
        console.log('Enemies:', enemies);
        
        // Initialisiere den Spieler
        player = new Player('Player1');
        
        // Mache die Variablen global verfügbar
        window.canvas = canvas;
        window.ctx = ctx;
        window.character = character;
        window.player = player;
        window.enemies = enemies;
        
        // Starte den Game Loop direkt nach der Character-Initialisierung
        gameLoop();
        
    } catch (error) {
        console.error('Fehler bei der Spielinitialisierung:', error);
    }
}

// Game Loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw character
    if (character.img) {
        ctx.drawImage(character.img, character.position.x, character.position.y, 150, 150);  // Feste Größe für den Hai
    }
    
    // Draw enemies
    enemies.forEach(enemy => {
        // Hier würde normalerweise das Enemy-Bild gezeichnet
        ctx.fillStyle = 'red';
        ctx.fillRect(enemy.position.x, enemy.position.y, 30, 30);
    });
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}