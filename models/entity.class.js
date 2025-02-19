class Entity {
    x=120;
    y=400;
    constructor(x, y) {
        this.position = { x, y };
    }

    bewegen(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
    }
}

export default Entity;
