class Entity {
    //Default Werte
    constructor(x = 120, y = 400) {
        this.position = { x, y };
        this.img = null;
        this.größe = 1;
        this.geschwindigkeit = 1;
    }

    bewegen(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
    }

    /**
     * Lädt ein Bild für die Entity
     * @param {string} path - Der Pfad zum Bild
     */
    loadImage(path) {
        let img = new Image();
        img.src = path;
        this.img = img;
    }
}
