class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.visibility = 255
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	
	{
			
			var stonepos=this.body.position;		
			
			
			push();
			translate(stonepos.x,stonepos.y);
			rectMode(CENTER)
			
			fill(255,0,255)
			ellipseMode(CENTER);
			
			ellipse(0,0, this.r);
			pop();
			if(this.body.speed<3){
				this.display();
			  
			}else{
				
			  World.remove(world,this.body);
			  push();
			  this.visibility = this.visibility - 5;
			  tint(255,this.visibility);
			  ellipse(this.body.position.x,this.body.position.y,50,50)
			  pop();
			  
			
			  };
			  }
			  }
			  
	

