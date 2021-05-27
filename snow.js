class snow{
    constructor(x,y){
     
        this.sn=Bodies.circle(x,y,10);
        World.add(wo,this.sn);
        this.Ig=loadImage("snow4.png")
    }

    display(){
        var pos=this.sn.position;
        var angle=this.sn.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.Ig,0,0,30,30);
        pop();
    }
}
