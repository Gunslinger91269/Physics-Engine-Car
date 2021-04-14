class Car{
    constructor(x,y,image){
        this.body = Bodies.rectangle(x,y,50,50)
        World.add(world,this.body)
        this.image = image
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    };
}