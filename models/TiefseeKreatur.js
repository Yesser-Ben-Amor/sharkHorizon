import Gegner from './Gegner.js';

class TiefseeKreatur extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit, sichtbarkeit) {
        super(x, y, stärke, leben, geschwindigkeit);
        this.sichtbarkeit = sichtbarkeit;
    }

    verstecken() {
        this.sichtbarkeit = 0;
    }

    überraschungsangriff(hai) {
        // Implementierung des Überraschungsangriffs
    }
}

export default TiefseeKreatur;
