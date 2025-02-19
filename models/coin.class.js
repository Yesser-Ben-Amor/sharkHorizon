class Coin extends Entity {
    constructor(x, y, wert) {
        super(x, y);
        this.wert = wert;
    }

    einsammeln() {
        // Implementierung des Einsammelns
        return this.wert;
    }

    animieren() {
        // Implementierung der Münz-Animation
    }
}
