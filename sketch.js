let state = 0; // this controls the states
// let level1;
// let level2;
// let level3;
let moon;
let fakeMoon;
let player; //this is the player
let goal; // this is the pumpkin goal
let fakePumpkins = []; //these are the fake pumpkins
let falsePumpkins;
let pumpkinImg;
let avatar;
let music;
let wall = []; //this is for the haybales
let sprite_array = [];

function preload() {
  avatar = loadImage("Heart Avatar.png");
  pumpkinImg = loadImage("Pumpkin (1).png");
  falsePumpkinsImg = loadImage ("Pumpkin (1).png")
  moonImg = loadImage("Cartoon Moon.png")
  music = loadSound("Grim Grinning Ghost.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 0;
  music.setVolume(0.5); // sets the volume for the song
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
  resetSketch();


}

function draw() {
  clear();
  background(98, 168, 61);

  if (state == 0) {
    cursor();
    splashScreen();
    allSprites.autoDraw = false;
  } else if (state == 1) {
    allSprites.draw();
    allSprites.autoDraw = true;
    noCursor();
    collectPumpkin();
    collectMoon();
    playerMove();
  } else if (state == 2) {
    allSprites.draw();
    allSprites.autoDraw = false;
    noCursor();
    collectPumpkin();
    collectMoon();
    playerMove();
  } else if (state == 3) {
    allSprites.draw();
    allSprites.autoDraw = true;
    noCursor();
    collectPumpkin();
    collectMoon();
    playerMove();
  } else if (state == 4) {
    allSprites.draw();
    allSprites.autoDraw = true;
    noCursor();
    collectPumpkin();
    collectMoon();
    playerMove();
  } else if (state == 21) {
    cursor();
    winScreen();
    allSprites.autoDraw = false;
     
  } else if (state == 22) {
    cursor();
    winScreen2();
    allSprites.autoDraw = false;
    
  } else if (state == 23) {
    cursor();
    winScreen3();
    allSprites.autoDraw = false;
        
  } else if (state == 24) {
    cursor();
    bigWinScreen();
    allSprites.autoDraw = false;
    
  } else if (state == 31) {
    loseScreen();
    allSprites.autoDraw = false;
    
  } else if (state == 32) {
    loseScreen();
    allSprites.autoDraw = false;
    
  } else if (state == 33) {
    loseScreen();
    allSprites.autoDraw = false;
    
  } else if (state == 34) {
    loseScreen();
    allSprites.autoDraw = false;
    
  }
}

function splashScreen() {
  music.stop();
  background("orange");
  fill(255, 0, 0);
  textSize(60);
  text("Pumpkin Pursuit", width / 2, height / 4);
  textSize(20);
  text("By Elizabeth Enloe & Erlinda Longchamp", width / 2, height / 3);

  text(
    "Use the Arrow Keys to find the real Pumpkin!",
    width / 2,
    height / 2 + height / 5
  );
  image(pumpkinImg, width / 2, height / 2 + height / 5 + 50, 50, 50);

  fill("green");
  rect(width / 2, height / 2, 150, 80);

  textSize(20);
  fill("yellow");
  text("Click to Start", width / 2, height / 2);
}
  
function collectPumpkin() {
  if (state == 1) {
    if (player.overlaps(goal)) {
      state = 21;
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
      fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
      fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
      wall[i].remove();
      }
    }
  }
  if (state == 2) {
    if (player.overlaps(goal)) {
      state = 22;
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
      fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
      fakePumpkins[i].remove();
            }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
      wall[i].remove();
      }
    }
  }
  if (state == 3) {
    if (player.overlaps(goal)) {
      state = 23;
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
      fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
      fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
      wall[i].remove();
      }
    }
  }
  if (state == 4) {
    if (player.overlaps(goal)) {
      state = 24;
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
       fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
       fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
       wall[i].remove();
      }
    }
  }
}

function collectMoon() {
  if (state == 1) {
    if (player.overlaps(moon)) {
      state = 31;
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
       fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
       fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
       wall[i].remove();
      }
  }}
  if (state == 2) {
    if (player.overlaps(moon)) {
      state = 32;
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
       fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
       fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
       wall[i].remove();
      }
  }}
  if (state == 3) {
    if (player.overlaps(moon)) {
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
       fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
       fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
       wall[i].remove();
      }
    state = 33;
  }}
  if (state == 4) {
    if (player.overlaps(moon)) {
      player.remove();
      goal.remove();
      moon.remove();
      for (let i = 0; i < 5; i++) {
       fakeMoon.remove();
      }
      for (let i = 0; i < 300; i++) {
       fakePumpkins[i].remove();
      }
      falsePumpkins.remove();
      for (let i = 0; i < 15; i++) {
       wall[i].remove();
      }
    state = 34;
  }}
}

function mousePressed() {
  if (state == 0) {
    state = 1;
    music.play(); //disable this to turn off the music
  }
  if (state == 21) {
    state = 2;
    //music.play(); //disable this to turn off the music
    resetSketch();    
  }
  if (state == 22) {
    state = 3;
    //music.play(); //disable this to turn off the music
    resetSketch(); 
  }
  if (state == 23) {
    state = 4;
    //music.play(); //disable this to turn off the music
    resetSketch(); 
  }
  if (state == 31) {
    state = 1;
    resetSketch();  
        //music.play(); //disable this to turn off the music
  }
  if (state == 32) {
    state = 2;
    resetSketch();  
    //music.play(); //disable this to turn off the music
  }
  if (state == 33) {
    state = 3;
    resetSketch();  
    //music.play(); //disable this to turn off the music
  }
  if (state == 34) {
    state = 4;
    resetSketch();  
    //music.play(); //disable this to turn off the music
  }
}

function winScreen() {
  //music.stop();
  background(98, 168, 61);
  fill("orange");
  textSize(80);
  text("You Win!!", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("But there's still 3 pumpkins left to find", windowWidth / 2, windowHeight / 1.7)
  textSize(40);
  text("Do you wish to continue? Click if you do.", windowWidth / 2, windowHeight / 1.5)
  //resetSketch();
}

function winScreen2() {
  //music.stop();
  background(98, 168, 61);
  fill("orange");
  textSize(80);
  text("You Win!!", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("But there's still 2 pumpkins left to find", windowWidth / 2, windowHeight / 1.7)
  textSize(40);
  text("Do you wish to continue? Click if you do.", windowWidth / 2, windowHeight / 1.5)
  //resetSketch();
}

function winScreen3() {
  //music.stop();
  background(98, 168, 61);
  fill("orange");
  textSize(80);
  text("You Win!!", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("But there's still 1 pumpkins left to find", windowWidth / 2, windowHeight / 1.7)
  textSize(40);
  text("Do you wish to continue? Click if you do.", windowWidth / 2, windowHeight / 1.5)
  //resetSketch();
}

function bigWinScreen() {
  music.stop();
  background(0,0,0);
  fill("orange");
  textSize(120);
  text("YOU WIN!!", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("You are the Pumpkin King!!", windowWidth / 2, windowHeight / 1.5)
  //resetSketch();
}

function loseScreen() {
  background("black");
  fill("orange");
  textSize(80);
  text("You Lose~", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("Click to re-try", windowWidth / 2, windowHeight / 1.5)
 // music.stop();
  //do we even need a lose condition?
  //resetSketch();
}

function playerMove() {
  if (kb.pressing("left")) player.vel.x = -5;
  else if (kb.pressing("right")) player.vel.x = 5;
  else player.vel.x = 0;

  if (kb.pressing("up")) player.vel.y = -5;
  else if (kb.pressing("down")) player.vel.y = 5;
  else player.vel.y = 0;

  //player.debug = mouse.pressing(); //only enable this for testing
}

function resetSketch() {
    // we load all of the sprites within the setup()
  player = new Sprite();
  player.img = avatar;
  player.scale = 0.05;
  player.width = 100;
  player.height = 50;
  player.rotationLock = true;

  goal = new Sprite(random(width), random(height), 5, 5, "none");
  goal.img = pumpkinImg;
  goal.scale = 0.2;
  goal.width = 20;
  goal.height = 20;
  goal.rotationLock = true;
  
  for (let i = 0; i < 5; i++) {
    fakeMoon = new Sprite (random(width), random(height), 5, 5, "none");
    fakeMoon.img = moonImg;
    fakeMoon.scale = 0.1;
    fakeMoon.width = 40;
    fakeMoon.height = 40;
    fakeMoon.rotationLock = true;
  }

  moon = new Sprite (random(width), random(height), 5, 5, "none");
  moon.img = moonImg;
  moon.scale = 0.1;
  moon.width = 40;
  moon.height = 40;
  moon.rotationLock = true;

  // these are "fake pumpkins" to confuse the player
for (let i = 0; i < 300; i++) {
  let x = random(width);
  let y = random(height);

  if (x < width / 2 + 50 && x > width / 2 - 50) {
    y = y + 50;

  }
  fakePumpkins[i] = new Sprite(x, y, random (100));
  noStroke();
  fakePumpkins[i].color = "orange";
  fakePumpkins[i].mass = 35;
}

for (let i = 0; i <300; i++) {
  let x = random(width);
  let y = random(height);
  if (x < width / 2 + 50 && x > width / 2 - 50) {
    y = y + 50;
  }
  falsePumpkins = new Sprite (x,y,random(100));
  falsePumpkins.img = falsePumpkinsImg;
  falsePumpkins.rotationLock = true;
}

  // these are "haybales", you can't move these
  for (let i = 0; i < 15; i++) {
    fill("orange");
    let x = random(width);
    let y = random(height);
    if (x < width / 2 + 50 && x > width / 2 - 50) {
      y = y + 100;
    }

    wall[i] = new Sprite(x, y, random(40), random(100), "static");
    wall[i].color = "yellow";
    // wall[i].mass = 1000;
  }

  
}
