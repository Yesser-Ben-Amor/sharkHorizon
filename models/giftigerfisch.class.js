import Gegner from './gegner.class.js';

class GiftigerFisch extends Gegner {
    giftLevel = 1;

    constructor(x, y, stärke, leben, giftLevel) {
        super(x, y, stärke, leben);
        this.giftLevel = giftLevel;
    }

    vergiften(hai) {
        // Implementierung der Vergiftung
        // Schaden basierend auf giftLevel
    }
}

export default GiftigerFisch;
