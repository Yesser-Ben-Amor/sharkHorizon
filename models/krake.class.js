class Krake extends Gegner {
    tintenangriff = false;

    constructor(x, y, stärke, leben) {
        super(x, y, stärke, leben);
    }

    verwirren(hai) {
        // Implementierung der Verwirrung
        if (this.tintenangriff) {
            // Verwirrungslogik hier implementieren
        }
    }
}
