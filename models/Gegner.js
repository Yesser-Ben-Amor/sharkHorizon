import Entity from './Entity.js';

class Gegner extends Entity {
    constructor(x, y, stärke, leben, geschwindigkeit) {
        super(x, y);
        this.stärke = stärke;
        this.leben = leben;
        this.geschwindigkeit = geschwindigkeit;
    }

    angreifen(hai) {
        // Basis-Implementierung des Angriffs
    }
}

export default Gegner;
