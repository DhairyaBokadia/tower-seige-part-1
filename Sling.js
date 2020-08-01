class Sling{
  constructor(point1,body2){
 var options={
     pointA:point1,
     bodyB:body2,
     stiffness:0.9,
     length:50
 }
  this.body=Matter.Constraint.create(options);

  World.add(world,this.body)
  }

  fly(){
    this.body.bodyB = null;
}

  display(){
      if (this.body.bodyB) {
        var pointA=this.body.pointA
        var pointB=this.body.bodyB.position
  
        line (pointA.x, pointA.y, pointB.x, pointB.y);
  
      }
     

  }
}