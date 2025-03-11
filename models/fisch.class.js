class Fisch extends Entity {
    IMAGES_SWIMMING_FISH = [
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];
    currentImage = 0;

    constructor(x, y, größe, geschwindigkeit, punkte) {
        super(x, y);
        super.loadImage('views/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImageFromCache(this.IMAGES_SWIMMING_FISH);
        this.animate();
        this.größe = größe;
        this.geschwindigkeit = geschwindigkeit;
        this.punkte = punkte;
    }

    animate() {
        setInterval(() => {
            this.currentImage = (this.currentImage + 1) % this.IMAGES_SWIMMING_FISH.length;
            let path = this.IMAGES_SWIMMING_FISH[this.currentImage];
            this.img = this.imageCache[path]; // Setze das aktuelle Bild
        }, 100);
    }

    schwimmen() {
        // Implementierung der Schwimm-Bewegung
    }
}

// Mache die Klasse global verfügbar
window.Fisch = Fisch;
