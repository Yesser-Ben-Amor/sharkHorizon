class Hai extends Entity {
    constructor(x, y, größe, geschwindigkeit) {
        super(x, y);
        super.loadImage('views/img/1.Sharkie/1.IDLE/1.png');
        this.loadImageFromCache([
            'views/img/1.Sharkie/1.IDLE/1.png',
            'views/img/1.Sharkie/1.IDLE/2.png',
            'views/img/1.Sharkie/1.IDLE/3.png',
            'views/img/1.Sharkie/1.IDLE/4.png',
            'views/img/1.Sharkie/1.IDLE/5.png',
            'views/img/1.Sharkie/1.IDLE/6.png',
            'views/img/1.Sharkie/1.IDLE/7.png',
            'views/img/1.Sharkie/1.IDLE/8.png',
            'views/img/1.Sharkie/1.IDLE/9.png',
            'views/img/1.Sharkie/1.IDLE/10.png',
            'views/img/1.Sharkie/1.IDLE/11.png',
            'views/img/1.Sharkie/1.IDLE/12.png',
            'views/img/1.Sharkie/1.IDLE/13.png',
            'views/img/1.Sharkie/1.IDLE/14.png',
            'views/img/1.Sharkie/1.IDLE/15.png',
            'views/img/1.Sharkie/1.IDLE/16.png',
            'views/img/1.Sharkie/1.IDLE/17.png',
            'views/img/1.Sharkie/1.IDLE/18.png',
            'views/img/1.Sharkie/1.IDLE/Prewiew.gif'
        ]);
        this.größe = größe;
        this.geschwindigkeit = geschwindigkeit;
        this.leben = 3;
        this.lebenAnzahl = 3;
        this.coins = 0;
    }

    fressen(fisch) {
        // Implementierung der Fress-Logik
    }

    angreifen(gegner) {
        // Implementierung der Angriffs-Logik
    }

    sammleCoin(coin) {
        this.coins += coin.wert;
    }

    verliereLeben() {
        this.leben--;
        return this.leben;
    }

    istGameOver() {
        return this.leben <= 0;
    }

    updatePosition(keys) {
        const speed = 5; // Geschwindigkeit des Hais
        let dx = 0;
        let dy = 0;
        if (keys['ArrowUp']) dy -= speed;
        if (keys['ArrowDown']) dy += speed;
        if (keys['ArrowLeft']) dx -= speed;
        if (keys['ArrowRight']) dx += speed;
        this.bewegen(dx, dy);
    }
}
