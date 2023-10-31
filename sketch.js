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

  world.gravity.x.y =4;

  // we load all of the sprites within the setup()
  player = new Sprite();
  player.img = avatar;
  player.scale = 0.05;
  player.width = 100;
  player.height = 50;
  player.rotationLock = true;

  goal = new Sprite(random(width), random(height), 5, 5, "none");
  goal.img = pumpkinImg;
  goal.scale = 0.02;
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
  // } else if (state == 2) {
  //   allSprites.draw();
  //   allSprites.autoDraw = true;
  //   noCursor();
  //   collectPumpkin();
  //   collectMoon();
  //   playerMove();
  // } else if (state == 3) {
  //   allSprites.draw();
  //   allSprites.autoDraw = true;
  //   noCursor();
  //   collectPumpkin();
  //   collectMoon();
  //   playerMove();
  // } else if (state == 4) {
  //   allSprites.draw();
  //   allSprites.autoDraw = true;
  //   noCursor();
  //   collectPumpkin();
  //   collectMoon();
  //   playerMove();
  } else if (state == 20) {
    cursor();
    winScreen();
    allSprites.autoDraw = false;
    
    
  } else if (state == 30) {
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
  text("By Elizabeth Eloe & Erlinda Longchamp", width / 2, height / 3);

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
  if (player.overlaps(goal)) {
    goal.remove();
    state = 20;
  }
}

function collectMoon() {
  if (player.overlaps(moon)) {
    moon.remove();
    state = 30;
  }
}

function mousePressed() {
  if (state == 0) {
    state = 1;
    music.play(); //disable this to turn off the music
  }
  // if (state == 20) {
  //   state = 2;
  //   music.play(); //disable this to turn off the music
  // }
  // else if (state == 20) {
  //   state = 3;
  //   music.play(); //disable this to turn off the music
  // }
  // else if (state == 20) {
  //   state = 4;
  //   music.play(); //disable this to turn off the music
  // }
  if (state == 20) {
    state = 1;
    music.play(); //disable this to turn off the music
  }
  if (state == 30) {
    state = 1;
    music.play(); //disable this to turn off the music
  }
}

function winScreen() {
  music.stop();
  background(98, 168, 61);
  fill("orange");
  textSize(80);
  text("You Win!!", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("Click to re-play", windowWidth / 2, windowHeight / 1.5)
}

function loseScreen() {
  background("black");
  fill("orange");
  textSize(80);
  text("You Lose~", windowWidth / 2, windowHeight / 2);
  textSize(40);
  text("Click to retry", windowWidth / 2, windowHeight / 1.5)
  music.stop();
  //do we even need a lose condition?
}

function playerMove() {
  if (kb.pressing("left")) player.vel.x = -3;
  else if (kb.pressing("right")) player.vel.x = 3;
  else player.vel.x = 0;

  if (kb.pressing("up")) player.vel.y = -3;
  else if (kb.pressing("down")) player.vel.y = 3;
  else player.vel.y = 0;
  //player.debug = mouse.pressing(); //only enable this for testing
}
