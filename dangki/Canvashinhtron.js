class MyPoint{
    x;
    y;
    radius;
    color;

    constructor(x, y, radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color =color
    }
    setX(x){
        this.x=x
    }
    getX(){
        return this.x
    }
    setY(y){
        this.y=y
    }
    getY(){
        return this.y
    }
    setRadius(radius){
        this.radius=radius
    }
    getRadius(){
        return this.radius
    }
    drawCircle(ctx){
        ctx.beginPath()
        ctx.fillStyle=this.color
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
}
