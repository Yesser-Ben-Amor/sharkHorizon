class Hai extends Entity {
    constructor(x, y, größe, geschwindigkeit) {
        super(x, y);
        super.loadImage('views/img/1.Sharkie/1.IDLE/1.png');
        this.größe = größe;
        this.geschwindigkeit = geschwindigkeit;
        this.leben = 3;
        this.lebenAnzahl = 3;
        this.coins = 0;
    }

    fressen(fisch) {
        // Implementierung der Fress-Logik
    }

    angreifen(gegner) {
        // Implementierung der Angriffs-Logik
    }

    sammleCoin(coin) {
        this.coins += coin.wert;
    }

    verliereLeben() {
        this.leben--;
        return this.leben;
    }

    istGameOver() {
        return this.leben <= 0;
    }
}
