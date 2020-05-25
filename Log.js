class Log{
    constructor(x,y,width,height,angle){
        var options = {
            'friction':1.5,
            'restitution':0,
            'density':1.0
        };
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
//this.angle = angle;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(0,255,0);
        rect(0,0,this.width,this.height);
        pop();
    }
}