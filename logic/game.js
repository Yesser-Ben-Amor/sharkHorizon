let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    character.src = 'views/img/1.Sharkie/1.IDLE/1.png';
    
    // Starte den Game Loop sobald das Bild geladen ist
    character.onload = function() {
        console.log('Character image loaded');
        gameLoop();
    }
    
    console.log('Game initialized');
}

// Game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw character in the center of canvas
    let x = (canvas.width - character.width) / 2;
    let y = (canvas.height - character.height) / 2;
    ctx.drawImage(character, x, y);
    
    // Request next frame
    requestAnimationFrame(gameLoop);
}