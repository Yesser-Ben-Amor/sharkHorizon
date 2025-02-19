import { Entity } from './entity.class.js';

export class Gegner extends Entity {
    constructor(x, y, stärke, leben) {
        super(x, y);
        this.stärke = stärke;
        this.leben = leben;
    }

    angreifen(hai) {
        // Implementierung des Angriffs
    }
}
