class Fisch extends Entity {
    constructor(x, y, größe, geschwindigkeit, punkte) {
        super(x, y);
        this.größe = größe;
        this.geschwindigkeit = geschwindigkeit;
        this.punkte = punkte;
    }

    schwimmen() {
        // Implementierung der Schwimm-Bewegung
    }
}

// Mache die Klasse global verfügbar
window.Fisch = Fisch;
