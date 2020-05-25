class Bird{
    constructor(){
        var options = {
            'friction':0.3,
            'restitution':0.8,
            'density':1.0
        };
        this.body = Bodies.rectangle(mouseX,mouseY,40,40,options);
        this.width = 40;
        this.height = 40;
        World.add(world,this.body);
    }
    display(){
        Body.setPosition(this.body,{
            x: mouseX,
            y: mouseY
        });
        push();
        translate(mouseX,mouseY);
        fill(255,0,0);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}