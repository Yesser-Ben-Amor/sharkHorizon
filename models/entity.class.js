class Entity {
    //Default Werte
    x=120;
    y=400;
    img;
    größe = 1;
    geschwindigkeit = 1;
    constructor(x = 120, y = 400) {
        this.position = { x, y };
    }

    bewegen(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
    }
}

export default Entity;
