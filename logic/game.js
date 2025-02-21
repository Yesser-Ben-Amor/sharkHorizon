// Game Variablen
let canvas;
let ctx;
let character;
let player = new Player('Player1');
let enemies = [
    new Fisch(100, 200, 1, 2, 10),  // x, y, größe, geschwindigkeit, punkte
    new Fisch(150, 300, 1, 2, 10),
    new Fisch(200, 400, 1, 2, 10),
    new Krake(300, 400, 10, 100),  // x, y, stärke, leben
];

// Initialisierung
function init() {
    console.log('Game initialization started');
    try {
        canvas = document.getElementById('gameCanvas');  // Korrigierte Canvas-ID
        ctx = canvas.getContext('2d');
        
        // Initialisiere Spielobjekte
        character = new Hai(120, 400, 1, 1);
        
        // Logging
        console.log('Canvas dimensions:', canvas.width, canvas.height);
        console.log('Character:', character);
        console.log('Enemies:', enemies);
        console.log('Player:', player);
        
        // Mache wichtige Spielvariablen global verfügbar für Debug-Zwecke
        window.canvas = canvas;
        window.character = character;
        window.player = player;
        window.enemies = enemies;
        
        // Starte den Game Loop
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
        if (enemy.img) {
            if (enemy instanceof Krake) {
                // Runden Kraken zeichnen
                ctx.save();
                ctx.beginPath();
                let x = enemy.position.x + 50;  // Mittelpunkt X
                let y = enemy.position.y + 50;  // Mittelpunkt Y
                let radius = 50;                // Radius für den Kreis
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(enemy.img, enemy.position.x, enemy.position.y, 100, 100);
                ctx.restore();
            } else {
                // Andere Gegner normal zeichnen
                ctx.drawImage(enemy.img, enemy.position.x, enemy.position.y, 100, 100);
            }
        }
    });
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}