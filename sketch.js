var movingrec,fixedrec
var rect3
var rect4
var rect5


function setup() {
  createCanvas(800,400);
 fixedrec=createSprite(400, 200, 50, 50);
  movingrec=createSprite(200,400,50,67);
  rect3=createSprite(300,200,90,40);
  rect4=createSprite(380,240,30,40);
  rect5=createSprite(100,300,40,60);

rect3.shapeColor="red"
rect4.shapeColor="blue"
rect5.shapeColor="lightblue"



fixedrec.shapeColor="black"
movingrec.shapeColor="black"

}

function draw() {
  background("silver");  
  movingrec.x=mouseX
  movingrec.y=mouseY
  
  if(isTouching(movingrec,rect5))
  {
    rect5.shapeColor="gold"
    movingrec.shapeColor="gold"
  }
  else{
    rect5.shapeColor="lightblue"
    movingrec.shapeColor="black"
  }
  drawSprites();
}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x <obj1.width/2 + obj2.width/2
    && obj2.x-obj1.x < obj1.width/2 + obj2.width/2
    && obj1.y-obj2.y < obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2 ){
     return true 
    }
   else{
   return false 
   }


}
