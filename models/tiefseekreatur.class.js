class Tiefseekreatur extends Gegner {
    constructor(x, y, stärke, leben, geschwindigkeit, sichtbarkeit) {
        super(x, y, stärke, leben);
        this.geschwindigkeit = geschwindigkeit;
        this.sichtbarkeit = sichtbarkeit;
    }

    verstecken() {
        this.sichtbarkeit = 0;
    }

    erscheinen() {
        this.sichtbarkeit = 1;
    }

    überraschungsangriff(hai) {
        // Implementierung des Überraschungsangriffs
    }
}
