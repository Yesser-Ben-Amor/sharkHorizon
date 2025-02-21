class Krake extends Gegner {
    tintenangriff = false;

    constructor(x, y, stärke, leben) {
        super(x, y, stärke, leben);
        this.loadImage('views/img/2.Enemy/2 Jelly fish/1.Swim/1.swim1.png');
    }

    verwirren(hai) {
        // Implementierung der Verwirrung
        if (this.tintenangriff) {
            // Verwirrungslogik hier implementieren
        }
    }
}
