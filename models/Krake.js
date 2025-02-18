import Gegner from './Gegner.js';

class Krake extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit, tentakelAnzahl) {
        super(x, y, stärke, leben, geschwindigkeit);
        this.tentakelAnzahl = tentakelAnzahl;
    }

    festhalten(hai) {
        // Implementierung des Festhaltens
    }

    tinteWerfen() {
        // Implementierung des Tinte-Werfens
    }
}

export default Krake;
