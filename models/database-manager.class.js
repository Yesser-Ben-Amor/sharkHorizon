// Import Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, set, get, push, query, orderByChild, limitToLast, update } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

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

    // Player Management
    async createPlayer(nickname) {
        try {
            const playerData = {
                nickname: nickname,
                score: 0,
                highScore: 0,
                lives: 3,
                lastPlayed: Date.now(),
                position: { x: 0, y: 0 },
                currentLevel: 1,
                collectedCoins: 0,
                health: 100,
                powerUps: {
                    shield: { active: false, duration: 0 },
                    speedBoost: { active: false, cooldown: 0 }
                }
            };

            const playerRef = ref(this.db, 'players');
            const newPlayerRef = push(playerRef);
            await set(newPlayerRef, playerData);
            return newPlayerRef.key;
        } catch (error) {
            console.error('Fehler beim Erstellen des Spielers:', error);
            return null;
        }
    }

    async updatePlayer(playerId, data) {
        try {
            const updates = {};
            for (const [key, value] of Object.entries(data)) {
                updates[`players/${playerId}/${key}`] = value;
            }
            await update(ref(this.db), updates);
            return true;
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Spielers:', error);
            return false;
        }
    }

    async getPlayer(playerId) {
        try {
            const playerRef = ref(this.db, `players/${playerId}`);
            const snapshot = await get(playerRef);
            return snapshot.exists() ? snapshot.val() : null;
        } catch (error) {
            console.error('Fehler beim Laden des Spielers:', error);
            return null;
        }
    }

    // Game State Management
    async createGameState(playerId) {
        try {
            const gameData = {
                players: {
                    [playerId]: {
                        score: 0,
                        currentLevel: 1,
                        position: { x: 0, y: 0 },
                        collectedCoins: 0,
                        health: 100,
                        powerUps: {
                            shield: { active: false, duration: 0 },
                            speedBoost: { active: false, cooldown: 0 }
                        }
                    }
                },
                status: 'running',
                currentLevel: 1,
                timestamp: Date.now()
            };

            const gameRef = ref(this.db, 'gameState');
            const newGameRef = push(gameRef);
            await set(newGameRef, gameData);
            return newGameRef.key;
        } catch (error) {
            console.error('Fehler beim Erstellen des Spielzustands:', error);
            return null;
        }
    }

    async updateGameState(gameId, playerId, data) {
        try {
            const updates = {};
            for (const [key, value] of Object.entries(data)) {
                updates[`gameState/${gameId}/players/${playerId}/${key}`] = value;
            }
            await update(ref(this.db), updates);
            return true;
        } catch (error) {
            console.error('Fehler beim Aktualisieren des Spielzustands:', error);
            return false;
        }
    }

    async getGameState(gameId) {
        try {
            const gameRef = ref(this.db, `gameState/${gameId}`);
            const snapshot = await get(gameRef);
            return snapshot.exists() ? snapshot.val() : null;
        } catch (error) {
            console.error('Fehler beim Laden des Spielzustands:', error);
            return null;
        }
    }

    // Highscore Management
    async addHighscore(playerId, nickname, score) {
        try {
            const highscoreData = {
                playerId: playerId,
                nickname: nickname,
                score: score,
                timestamp: Date.now()
            };

            const highscoreRef = ref(this.db, 'highscores');
            const newHighscoreRef = push(highscoreRef);
            await set(newHighscoreRef, highscoreData);
            return true;
        } catch (error) {
            console.error('Fehler beim Speichern des Highscores:', error);
            return false;
        }
    }

    async getHighscores(limit = 10) {
        try {
            const highscoresRef = ref(this.db, 'highscores');
            const highscoresQuery = query(
                highscoresRef,
                orderByChild('score'),
                limitToLast(limit)
            );

            const snapshot = await get(highscoresQuery);
            const highscores = [];

            if (snapshot.exists()) {
                snapshot.forEach(function(childSnapshot) {
                    highscores.push(childSnapshot.val());
                });
                highscores.sort(function(a, b) {
                    return b.score - a.score;
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
