import Gegner from './gegner.class.js';

class Barrakuda extends Gegner {
    bisskraft = 0;

    constructor(x, y, stärke, leben, bisskraft) {
        super(x, y, stärke, leben);
        this.bisskraft = bisskraft;
    }

    blitzangriff(hai) {
        // Implementierung des Blitzangriffs
        // Schaden basierend auf bisskraft
    }
}

export default Barrakuda;
