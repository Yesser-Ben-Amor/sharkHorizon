import Gegner from './gegner.class.js';

class Qualle extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit, giftig) {
        super(x, y, stärke, leben, geschwindigkeit);
        this.giftig = giftig;
    }

    elektrisieren(hai) {
        // Implementierung des Elektrisierens
    }
}

export default Qualle;
