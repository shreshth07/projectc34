class Snow {

    constructor(x,y) {
        this.body = Bodies.circle(x,y,10)
        this.radius = 10
        World.add(world,  this.body )  
        this.image = loadImage("snow5.webp")
    }

    display() {
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius   )
    }

    update() {
        if(this.body.position.y > 700) {
            Body.setPosition(this.body, {x: random(0,800), y: random(-10,0)})
        }
    }
}