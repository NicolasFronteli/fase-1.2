var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["cd754ea7-9038-412a-bbb7-1b13ccadfe06"],"propsByKey":{"cd754ea7-9038-412a-bbb7-1b13ccadfe06":{"name":"blue_shirt_book_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW/category_people/blue_shirt_book.png","frameSize":{"x":136,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW/category_people/blue_shirt_book.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Vinimalvadeza = createSprite(20,25,18,18);
var Papelao1 = createSprite(10,70,100,20);
var Papelao2 = createSprite(100,25,20,20);
var Papelao3 =createSprite(200,40,220,20);
var Papelao4 = createSprite(50,115,20,100);
var Papelao5 = createSprite(100,140,20,110);
var Papelao6 = createSprite(10,200,100,20);
var Papelao7 = createSprite(50,285,20,90);
var Papelao8 = createSprite(10,320,100,20);
var Papelao9 = createSprite(10,370,300,20);
var Papelao10 = createSprite(170,130,150,20);
var Papelao11 = createSprite(100,280,20,100);
var Papelao12 = createSprite(365,380,15,50);
var Papelao13 = createSprite(150,300,20,250);
var Papelao14 = createSprite(190,180,100,20);
var Papelao15 = createSprite(200,70,20,40);
var Papelao16 = createSprite(240,80,100,20);
var Papelao17 = createSprite(250,155,20,70);
var Papelao18 = createSprite(300,150,20,160);
var Papelao19 = createSprite(325,220,70,20);
var Papelao20 = createSprite(310,270,180,20);
var Papelao21 = createSprite(250,300,15,60);
var Papelao22 = createSprite(215,315,20,110);
var Papelao23 = createSprite(340,115,20,110);
var Papelao24 = createSprite(320,380,15,50);
var Papelao25 = createSprite(280,380,15,50);
var Taca = createSprite(390,395,25,10);
var Errado = createSprite(340,395,25,10);
var Errado2 = createSprite(300,395,20,10);
Papelao1.shapeColor = "Black";
Papelao2.shapeColor = "black";
Papelao3.shapeColor = "black";
Papelao4.shapeColor = "black";
Papelao5.shapeColor = "black";
Papelao6.shapeColor = "black";
Papelao7.shapeColor = "black";
Papelao8.shapeColor = "black";
Papelao9.shapeColor = "black";
Papelao10.shapeColor = "black";
Papelao11.shapeColor = "black";
Papelao12.shapeColor = "black";
Papelao13.shapeColor = "black";
Papelao14.shapeColor = "black";
Papelao15.shapeColor = "black";
Papelao16.shapeColor = "black";
Papelao17.shapeColor = "black";
Papelao18.shapeColor = "black";
Papelao19.shapeColor = "black";
Papelao20.shapeColor = "black";
Papelao21.shapeColor = "black";
Papelao22.shapeColor = "black";
Papelao23.shapeColor = "black";
Papelao24.shapeColor = "black";
Papelao25.shapeColor = "black";

Vinimalvadeza.setAnimation("blue_shirt_book_1");
Vinimalvadeza.scale= 0.08;
Taca.shapeColor = "white";
Errado.shapeColor = "white";
Errado2.shapeColor = "white";


function draw() {
  background("white");
  
  
  createEdgeSprites();
  Vinimalvadeza.bounceOff(edges);
  Vinimalvadeza.bounceOff(Papelao1);
  Vinimalvadeza.bounceOff(Papelao2);
  Vinimalvadeza.bounceOff(Papelao3);
  Vinimalvadeza.bounceOff(Papelao4);
  Vinimalvadeza.bounceOff(Papelao5);
  Vinimalvadeza.bounceOff(Papelao6);
  Vinimalvadeza.bounceOff(Papelao7);
  Vinimalvadeza.bounceOff(Papelao8);
  Vinimalvadeza.bounceOff(Papelao9);
  Vinimalvadeza.bounceOff(Papelao10);
  Vinimalvadeza.bounceOff(Papelao11);
  Vinimalvadeza.bounceOff(Papelao12);
  Vinimalvadeza.bounceOff(Papelao13);
  Vinimalvadeza.bounceOff(Papelao14);
  Vinimalvadeza.bounceOff(Papelao15);
  Vinimalvadeza.bounceOff(Papelao16);
  Vinimalvadeza.bounceOff(Papelao17);
  Vinimalvadeza.bounceOff(Papelao18);
  Vinimalvadeza.bounceOff(Papelao19);
  Vinimalvadeza.bounceOff(Papelao20);
  Vinimalvadeza.bounceOff(Papelao21);
  Vinimalvadeza.bounceOff(Papelao22);
  Vinimalvadeza.bounceOff(Papelao23);
  Vinimalvadeza.bounceOff(Papelao24);
  Vinimalvadeza.bounceOff(Papelao25);

  
  Vinimalvadeza.setVelocity(0,0);
  
  if(keyDown(UP_ARROW)){
  Vinimalvadeza.velocityX = 0;
  Vinimalvadeza.velocityY =-3;
  }
  if(keyDown(DOWN_ARROW)){
  Vinimalvadeza.velocityX = 0;
  Vinimalvadeza.velocityY =3;
  }
  if(keyDown(LEFT_ARROW)){
  Vinimalvadeza.velocityX =-3;
  Vinimalvadeza.velocityY =0;
  }
  if(keyDown(RIGHT_ARROW)){
  Vinimalvadeza.velocityX = 3;
  Vinimalvadeza.velocityY = 0;
  }
  if(Vinimalvadeza.isTouching(Taca)){
  stroke("red");
  text("Você venceu",315,5,15,textSize(25));
  Vinimalvadeza.velocityX = 0;
  Vinimalvadeza.velocityY = 0;
  
  }
  
  if(Vinimalvadeza.isTouching(Errado)||Vinimalvadeza.isTouching(Errado2)){
  Vinimalvadeza.velocityX = 0;
  Vinimalvadeza.velocityY = 0;
  stroke("red");
  text("Você perdeu",315,5,15,textSize(25));
 }
  
  stroke("red");
  text("1x64-48",290,300,15,textSize(25));
  stroke("red");
  text("16",375,375,15,textSize(15));
  stroke("red");
  text("0",335,375,15,textSize(15));
  stroke("red");
  text("20",290,375,15,textSize(15));
  stroke("red");
  text("Fase-1",32,10,15,textSize(18));
  
  drawSprites();
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
