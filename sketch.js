const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

for (var k = 0; k <= width, k=k+80;){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 40; j <= width; j=j+50){
  plinkos.push(new Plinkos(j, 75));
}
for (var j = 15; j <= width-10; j=j+50){
  plinkos.push(new Plinkos(j, 175));
}
for (var j = 40; j <= width; j=j+50){
  plinkos.push(new Plinkos(j, 275));
}
for (var j = 15; j <= width-10; j=j+50){
  plinkos.push(new Plinkos(j, 375));
}
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(240,780,480,20);

}

function draw() {
  background("black");  
  Engine.update(engine);
  for (var j=0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k=0; j < divisions.length; k++){
    divisions[k].display();
  }
}
