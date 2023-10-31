 let player;
let objects = [];

function setup() {
  createCanvas(400, 400);

  // Create a player sprite
  player = createSprite(50, height / 2, 30, 30);
  player.shapeColor = color(255);

  // Create objects with different masses
  for (let i = 0; i < 3; i++) {
    let obj = createSprite(300, random(height), 40, 40);
    obj.shapeColor = color(random(255), random(255), random(255));
    
    // Set mass based on the object's index
    obj.mass = 100 + i; // Mass increases for each object
    objects.push(obj);
  }
}

function draw() {
  background(220);

  // Control the player with arrow keys
if (kb.pressing('left')) player.vel.x = -5;
		else if (kb.pressing('right')) player.vel.x = 5;
		else player.vel.x = 0;
  
  
  // Control the player with arrow keys
if (kb.pressing('up')) player.vel.y = -5;
		else if (kb.pressing('down')) player.vel.y = 5;
		else player.vel.y = 0;

 // Check for collisions with objects
  for (let obj of objects) {
    if (player.collide(obj)) {
      // Calculate a force based on the player's velocity and object's mass
      let force = p5.Vector.sub(player.position, obj.position);
      force.setMag(player.velocity.mag() * player.mass); // Use player.velocity
      obj.applyForce(force);
    }
  }

  // Update and display the player and objects
  player.update();
  for (let obj of objects) {
    obj.update();
  }

  //drawSprites();
}