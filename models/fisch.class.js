class Fisch extends Entity {
    constructor(x, y, größe, geschwindigkeit, punkte) {
        super(x, y);
        super.loadImage('views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
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
