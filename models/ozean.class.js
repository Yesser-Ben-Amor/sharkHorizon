class Ozean {
    constructor(breite, höhe, tiefe) {
        this.breite = breite;
        this.höhe = höhe;
        this.tiefe = tiefe;
        this.strömungen = [];
        this.hindernisse = [];
    }

    strömungHinzufügen(x, y, stärke, richtung) {
        this.strömungen.push({
            position: { x, y },
            stärke,
            richtung
        });
    }

    hindernisHinzufügen(x, y, größe) {
        this.hindernisse.push({
            position: { x, y },
            größe
        });
    }
}
