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
          this.image=loadImage("0.png");
        }
        if(colorcode===2)
        {
          this.image=loadImage("1.png");
        }
        if(colorcode===3)
        {
          this.image=loadImage("3.png");
        }
        if(colorcode===4)
        {
          this.image=loadImage("4.png");
        }
        if(colorcode===5)
        {
          this.image=loadImage("5.png");
        }
        if(colorcode===6)
        {
          this.image=loadImage("6.png");
        }
        if(colorcode===1)
        {
          this.image=loadImage("0.png");
        }
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width, this.height);
        pop();
      }
}