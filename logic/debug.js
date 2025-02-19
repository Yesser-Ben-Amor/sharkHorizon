/**
 * Debug-Modul für Entwicklungszwecke
 * Stellt Hilfsfunktionen bereit, um den Spielzustand während der Entwicklung zu überprüfen
 */

// -------- Debug-Funktionen --------

/**
 * Gibt das Array aller Gegner zurück
 * Nützlich um die Position und Eigenschaften der Gegner zu überprüfen
 * @returns {Array} Array von Gegner-Objekten
 */
function getEnemies() {
    return window.enemies;
}

/**
 * Gibt das Charakter-Objekt (den Hai) zurück
 * Hilfreich um Position, Größe und andere Eigenschaften des Spielercharakters zu prüfen
 * @returns {Entity} Das Hai-Objekt
 */
function getCharacter() {
    return window.character;
}

/**
 * Gibt das Player-Objekt zurück
 * Ermöglicht die Überprüfung von Spielerstatistiken wie Score, Leben, etc.
 * @returns {Player} Das Player-Objekt
 */
function getPlayer() {
    return window.player;
}

/**
 * Druckt den aktuellen Spielzustand in der Konsole aus
 * Zeigt eine Übersicht aller wichtigen Spielobjekte und deren Eigenschaften
 * Besonders nützlich zur schnellen Fehlersuche
 */
function printGameState() {
    console.log('Game State:', {
        enemies: window.enemies,    // Array aller Gegner
        character: window.character, // Der Spielercharakter (Hai)
        player: window.player       // Spielerdaten (Score, Leben, etc.)
    });
}

// Füge die Debug-Funktionen dem globalen window-Objekt hinzu
// Dies ermöglicht den Zugriff über die Browser-Konsole
window.debug = {
    getEnemies,     // Zugriff via debug.getEnemies()
    getCharacter,   // Zugriff via debug.getCharacter()
    getPlayer,      // Zugriff via debug.getPlayer()
    printGameState  // Zugriff via debug.printGameState()
};
