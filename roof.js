class roof{
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        rect(pos.x,pos.y,this.width,this.height)
    }

}