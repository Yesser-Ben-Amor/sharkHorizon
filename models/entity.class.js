class Entity {
    //Default Werte
    x=120;
    y=400;
    img;
    constructor(x, y) {
        this.position = { x, y };
    }

    bewegen(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
    }
}

export default Entity;
