// JavaScript code for SharkHorizon game

const shark = document.getElementById('shark');
const frames = 18; // Anzahl der Bilder in der IDLE-Animation
let currentFrame = 1;

function updateSharkSprite() {
    currentFrame = currentFrame % frames + 1;
    shark.style.backgroundImage = `url('views/img/1.Sharkie/1.IDLE/${currentFrame}.png')`;
}

// Sprite-Animation alle 100ms aktualisieren
setInterval(updateSharkSprite, 100);
