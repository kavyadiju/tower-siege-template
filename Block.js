class Block{
    constructor(x, y, width, height,colorcode) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.colorcode=colorcode;
        World.add(world, this.body);

        if(colorcode===1)
        {
           fill("");
        }
        if(colorcode===2)
        {
          fill("");
        }
        if(colorcode===3)
        {
           fill("");
        }
        if(colorcode===4)
        {
           fill("");
        }
        if(colorcode===5)
        {
           fill("");
        }
        if(colorcode===6)
        {
          fill("");
        }
        if(colorcode===1)
        {
          fill("");
        }
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
