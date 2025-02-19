class Qualle extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit, giftig) {
        super(x, y, stärke, leben);
        this.geschwindigkeit = geschwindigkeit;
        this.giftig = giftig;
    }

    pulsieren() {
        // Implementierung der Pulsier-Bewegung
    }

    vergiften(hai) {
        // Implementierung des Giftangriffs
    }
}
