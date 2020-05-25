class Pig{
    constructor(x,y){
        var options = {
            'friction':0.3,
            'restitution':0,
            'density':1.0
        };
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){
        let pos = this.body.position;
        push();
        //translate(pos.x,pos.y);
        fill(0,255,0);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}