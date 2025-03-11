class Entity {
    //Default Werte
    constructor(x = 120, y = 400) {
        this.position = { x, y };
        this.img = null;
        this.größe = 1;
        this.geschwindigkeit = 1;
        this.imageCache = {};
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
        img.onload = () => {
            this.img = img;
            console.log('Bild geladen:', path);
        };
        img.onerror = () => {
            console.error('Fehler beim Laden des Bildes:', path);
        };
        img.src = path;
    }
    loadImageFromCache(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
            img.onload = () => {
                console.log('Bild geladen:', path);
            };
            img.onerror = () => {
                console.error('Fehler beim Laden des Bildes:', path);
            };
            img.src = path;
        });
    }
}
