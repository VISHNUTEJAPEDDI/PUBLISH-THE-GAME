var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var squariad = createSprite(200, 280, 20, 20);
squariad.shapeColor ="white";
var Pin1 = createSprite(200, 300, 20, 20);
Pin1.shapeColor ="BLACK";
var Pin2 = createSprite(180, 320, 20, 20);
Pin2.shapeColor ="BLACK";
var Pin3 = createSprite(220, 320, 20, 20);
Pin3.shapeColor ="BLACK";
var Pin4 = createSprite(160, 340, 20, 20);
Pin4.shapeColor ="BLACK";
var Pin5 = createSprite(200, 340, 20, 20);
Pin5.shapeColor ="BLACK";
var Pin6 = createSprite(240, 340, 20, 20);
Pin6.shapeColor ="Black";
squariad.velocityX=10;
squariad.velocityY=10;


function draw() {
background("GRAY");
createEdgeSprites()

Pin1.bounceOff(edges);
Pin2.bounceOff(edges);
Pin3.bounceOff(edges);
Pin4.bounceOff(edges);
Pin5.bounceOff(edges);
Pin6.bounceOff(edges);
squariad.bounceOff(edges);

Pin1.bounce(squariad);
Pin1.bounce(Pin2);
Pin1.bounce(Pin3);
Pin1.bounce(Pin4);
Pin1.bounce(Pin5);
Pin1.bounce(Pin6);

Pin2.bounce(squariad);
Pin2.bounce(Pin1);
Pin2.bounce(Pin3);
Pin2.bounce(Pin4);
Pin2.bounce(Pin5);
Pin2.bounce(Pin6);

Pin3.bounce(squariad);
Pin3.bounce(Pin1);
Pin3.bounce(Pin2);
Pin3.bounce(Pin4);
Pin3.bounce(Pin5);
Pin3.bounce(Pin6);

Pin4.bounce(squariad);
Pin4.bounce(Pin1);
Pin4.bounce(Pin2);
Pin4.bounce(Pin3);
Pin4.bounce(Pin5);
Pin4.bounce(Pin6);

Pin5.bounce(squariad);
Pin5.bounce(Pin1);
Pin5.bounce(Pin2);
Pin5.bounce(Pin3);
Pin5.bounce(Pin4);
Pin5.bounce(Pin6);

Pin6.bounce(squariad);
Pin6.bounce(Pin1);
Pin6.bounce(Pin2);
Pin6.bounce(Pin3);
Pin6.bounce(Pin4);
Pin6.bounce(Pin5);

drawSprites()
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
