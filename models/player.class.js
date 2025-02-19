class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.score = 0;
        this.level = 1;
        this.highscore = 0;
        this.coins = 0;
        this.leben = 100;
        this.munition = 20;
    }

    async ladePlayerDaten() {
        // Hier würde normalerweise der Code zum Laden der Spielerdaten stehen
        return Promise.resolve();
    }

    erhöheScore(punkte) {
        this.score += punkte;
        this.aktualisiereHighScore();
    }

    erhöheLevel() {
        this.level++;
    }

    sammleCoin() {
        this.coins++;
    }

    nimmSchaden(schaden) {
        this.leben -= schaden;
        if (this.leben < 0) this.leben = 0;
    }

    heile(heilung) {
        this.leben += heilung;
        if (this.leben > 100) this.leben = 100;
    }

    schießen() {
        if (this.munition > 0) {
            this.munition--;
            return true;
        }
        return false;
    }

    aktualisiereHighScore() {
        if (this.score > this.highscore) {
            this.highscore = this.score;
        }
    }
}
