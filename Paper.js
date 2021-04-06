class Paper{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,30,options);
        this.radius=30;
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var pos=this.body.position;
        //var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        stroke(255);
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,30);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    
    }
    
    }