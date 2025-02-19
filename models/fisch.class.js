import { Entity } from './entity.class.js';

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

export default Fisch;
