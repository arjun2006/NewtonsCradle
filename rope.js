class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
           
        }
        this.pointB={offsetX,offsetY};
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var AnchorX=pointB.x+this.offsetX;
        var AnchorY=pointB.y+this.offsetY;
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, AnchorX, AnchorY);
        
    }
}
    fly (){
        this.rope.bodyA=null
    }
}