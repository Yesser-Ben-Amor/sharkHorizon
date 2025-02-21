class Krake extends Gegner {
    tintenangriff = false;

    constructor(x, y, stärke, leben) {
        super(x, y, stärke, leben);
        super.loadImage('views/img/2.Enemy/3 Final Enemy/2.floating/1.png');
    }

    verwirren(hai) {
        // Implementierung der Verwirrung
        if (this.tintenangriff) {
            // Verwirrungslogik hier implementieren
        }
    }
}
