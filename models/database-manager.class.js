class DatabaseManager {
    constructor() {
        // Hier könnte eine echte Datenbankverbindung initialisiert werden
        this.localData = {};
    }

    async speichereDaten(collection, id, data) {
        try {
            // Simuliere Datenbankoperationen mit localStorage
            const collectionData = JSON.parse(localStorage.getItem(collection) || '{}');
            collectionData[id] = data;
            localStorage.setItem(collection, JSON.stringify(collectionData));
            return true;
        } catch (error) {
            console.error(`Fehler beim Speichern in ${collection}:`, error);
            return false;
        }
    }

    async ladeDaten(collection, id) {
        try {
            const collectionData = JSON.parse(localStorage.getItem(collection) || '{}');
            return collectionData[id] || null;
        } catch (error) {
            console.error(`Fehler beim Laden aus ${collection}:`, error);
            return null;
        }
    }

    async ladeHighscoreListe() {
        try {
            const playersData = JSON.parse(localStorage.getItem('players') || '{}');
            return Object.values(playersData)
                .sort((a, b) => b.highScore - a.highScore)
                .slice(0, 10); // Top 10 Highscores
        } catch (error) {
            console.error('Fehler beim Laden der Highscore-Liste:', error);
            return [];
        }
    }
}

// Erstelle eine globale Instanz
window.databaseManager = new DatabaseManager();

export default DatabaseManager;
