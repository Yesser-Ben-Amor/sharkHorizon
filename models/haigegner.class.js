import Gegner from './gegner.class.js';

class HaiGegner extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit) {
        super(x, y, stärke, leben, geschwindigkeit);
    }

    jagen(hai) {
        // Implementierung der Jagd-Logik
    }

    fliehen() {
        // Implementierung der Flucht-Logik
    }
}

export default HaiGegner;
