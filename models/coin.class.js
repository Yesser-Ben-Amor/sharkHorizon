import Entity from './entity.class.js';

class Coin extends Entity {
    constructor(x, y, wert) {
        super(x, y);
        this.wert = wert;
    }

    einsammeln(hai) {
        hai.sammleCoin(this);
    }
}

export default Coin;
