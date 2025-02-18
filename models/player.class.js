class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.score = 0;
        this.highScore = 0;
        this.verfügbareLeben = 3;
    }

    async ladePlayerDaten() {
        try {
            const data = await window.databaseManager.ladeDaten('players', this.nickname);
            if (data) {
                this.highScore = data.highScore;
                return true;
            }
        } catch (error) {
            console.error('Fehler beim Laden der Spielerdaten:', error);
        }
        return false;
    }

    async speicherePlayerDaten() {
        try {
            const playerData = {
                nickname: this.nickname,
                highScore: this.highScore,
                lastScore: this.score
            };
            await window.databaseManager.speichereDaten('players', this.nickname, playerData);
            return true;
        } catch (error) {
            console.error('Fehler beim Speichern der Spielerdaten:', error);
            return false;
        }
    }

    aktualisiereHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.speicherePlayerDaten();
        }
    }

    verliereLeben() {
        if (this.verfügbareLeben > 0) {
            this.verfügbareLeben--;
            return this.verfügbareLeben;
        }
        return 0;
    }

    erhöheScore(punkte) {
        this.score += punkte;
        this.aktualisiereHighScore();
    }
}

export default Player;
