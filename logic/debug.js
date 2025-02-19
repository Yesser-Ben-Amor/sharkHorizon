/**
 * Debug-Modul für Entwicklungszwecke
 * Ermöglicht den Zugriff auf Spielvariablen in der Konsole
 */
import { enemies, character, player } from './game.js';

// Debug-Funktionen
export function getEnemies() {
    return enemies;
}

export function getCharacter() {
    return character;
}

export function getPlayer() {
    return player;
}

// Debug-Informationen
export function printGameState() {
    console.log('Game State:', {
        enemies: enemies,
        character: character,
        player: player
    });
}

// Füge die Debug-Funktionen dem window-Objekt hinzu, wenn wir im Debug-Modus sind
if (process.env.NODE_ENV !== 'production') {
    window.debug = {
        getEnemies,
        getCharacter,
        getPlayer,
        printGameState
    };
}
