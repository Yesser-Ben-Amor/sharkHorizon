import Gegner from './gegner.class.js';

class PiranhaSchwarm extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit, anzahl) {
        super(x, y, stärke, leben, geschwindigkeit);
        this.anzahl = anzahl;
    }

    schwärmen() {
        // Implementierung des Schwarm-Verhaltens
    }

    biss(hai) {
        // Implementierung des Biss-Angriffs
    }
}

export default PiranhaSchwarm;
