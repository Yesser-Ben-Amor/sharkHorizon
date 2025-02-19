/**
 * Debug-Modul für Entwicklungszwecke
 * Ermöglicht den Zugriff auf Spielvariablen in der Konsole
 */

// Debug-Funktionen
function getEnemies() {
    return window.enemies;
}

function getCharacter() {
    return window.character;
}

function getPlayer() {
    return window.player;
}

// Debug-Informationen
function printGameState() {
    console.log('Game State:', {
        enemies: window.enemies,
        character: window.character,
        player: window.player
    });
}

// Füge die Debug-Funktionen dem window-Objekt hinzu
window.debug = {
    getEnemies,
    getCharacter,
    getPlayer,
    printGameState
};
