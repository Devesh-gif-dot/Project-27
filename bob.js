class Bob {

    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r/2,{isStatic: false});
        World.add(world,this.body)

    }

    display(){
        fill('pink');
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }


}