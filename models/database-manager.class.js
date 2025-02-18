// Import Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, doc, getDoc, setDoc, collection, query, orderBy, limit, getDocs } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

class DatabaseManager {
    constructor() {
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDRwFWkrWkN7_TLXzFh1_Zy-lxRJw7_3Oo",
            authDomain: "sharkhorizon.firebaseapp.com",
            projectId: "sharkhorizon",
            storageBucket: "sharkhorizon.appspot.com",
            messagingSenderId: "1027916663451",
            appId: "1:1027916663451:web:e1c3b0b2c7f5a8f1c3f3c3"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }

    async speichereDaten(collection, id, data) {
        try {
            const docRef = doc(this.db, collection, id);
            await setDoc(docRef, data);
            return true;
        } catch (error) {
            console.error(`Fehler beim Speichern in ${collection}:`, error);
            return false;
        }
    }

    async ladeDaten(collection, id) {
        try {
            const docRef = doc(this.db, collection, id);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return docSnap.data();
            }
            return null;
        } catch (error) {
            console.error(`Fehler beim Laden aus ${collection}:`, error);
            return null;
        }
    }

    async ladeHighscoreListe() {
        try {
            const highscoresRef = collection(this.db, 'players');
            const q = query(highscoresRef, orderBy('highScore', 'desc'), limit(10));
            const querySnapshot = await getDocs(q);
            
            const highscores = [];
            querySnapshot.forEach(function(doc) {
                highscores.push(doc.data());
            });
            
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
