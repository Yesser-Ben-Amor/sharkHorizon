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
}
