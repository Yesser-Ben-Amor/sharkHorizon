// Import Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, set, get, query, orderByChild, limitToLast } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

class DatabaseManager {
    constructor() {
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDRwFWkrWkN7_TLXzFh1_Zy-lxRJw7_3Oo",
            authDomain: "sharkhorizon.firebaseapp.com",
            databaseURL: "https://sharkhorizon-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "sharkhorizon",
            storageBucket: "sharkhorizon.appspot.com",
            messagingSenderId: "1027916663451",
            appId: "1:1027916663451:web:e1c3b0b2c7f5a8f1c3f3c3"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        this.db = getDatabase(app);
    }

    async speichereDaten(collection, id, data) {
        try {
            const reference = ref(this.db, `${collection}/${id}`);
            await set(reference, data);
            return true;
        } catch (error) {
            console.error(`Fehler beim Speichern in ${collection}:`, error);
            return false;
        }
    }

    async ladeDaten(collection, id) {
        try {
            const reference = ref(this.db, `${collection}/${id}`);
            const snapshot = await get(reference);
            
            if (snapshot.exists()) {
                return snapshot.val();
            }
            return null;
        } catch (error) {
            console.error(`Fehler beim Laden aus ${collection}:`, error);
            return null;
        }
    }

    async ladeHighscoreListe() {
        try {
            const highscoresRef = ref(this.db, 'players');
            const highscoresQuery = query(highscoresRef, 
                orderByChild('highScore'),
                limitToLast(10)
            );
            
            const snapshot = await get(highscoresQuery);
            const highscores = [];
            
            if (snapshot.exists()) {
                // Konvertiere die Daten in ein Array und sortiere absteigend
                snapshot.forEach(function(childSnapshot) {
                    highscores.push(childSnapshot.val());
                });
                highscores.sort(function(a, b) {
                    return b.highScore - a.highScore;
                });
            }
            
            return highscores;
        } catch (error) {
            console.error('Fehler beim Laden der Highscore-Liste:', error);
            return [];
        }
    }
}

// Erstelle eine globale Instanz
window.databaseManager = new DatabaseManager();

export default DatabaseManager;
