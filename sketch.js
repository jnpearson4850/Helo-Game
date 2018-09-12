var player;
// background image
var img;

var enemy;
var enemy2;
var enemy3;
var enemy4;

//timer
function preload() {
    imgImg = loadImage("https://i.imgur.com/aKQOg3G.png");
}
function setup() {
    createCanvas(1000, 700);
    // player sprite
    player = createSprite(50, 400, 100, 100, 40); //(x, y, w, h)
    //top wall sprites
    wall = createSprite(200, 50, 50, 100) //(x, y, w, h)
    wall1 = createSprite(300, 100, 100, 200)
    //bottom wall sprites
    tri1 = createSprite(200, 700, 100, 200)
    tri2 = createSprite(300, 700, 100, 450)
    //flying objects
    enemy = createSprite(width / 2, 0, 20, 60);
    enemy.rotationSpeed = 4.0
    enemy2 = createSprite(width / 2, 0, 60, 20);
    enemy2.rotationSpeed = 2.0
    enemy3 = createSprite(width / 2, 0, 40, 20);
    enemy3.rotationSpeed = 6.0
    enemy4 = createSprite(width / 2, 0, 10, 30);
}

function draw() {
    // background(50, 205, 0)
    background(imgImg)
    //set screen at -100 pixels to start game
    translate(100, 0)

    // below used to move Helo
    if (keyDown(32) && player.position.y < height) {
        player.position.y = player.position.y - 15;
    }

    // set pace for walls
    wall.position.x = wall.position.x - 1
    wall1.position.x = wall1.position.x - 1

    tri1.position.x = tri1.position.x - 1
    tri2.position.x = tri2.position.x - 1

    //below sets pace for Helo movement
    player.position.y = player.position.y + 8
    player.position.x = player.position.x + 0

    //needed to render sprites
    drawSprites()
}


function spaceBarPressed() {
    if (keyDown === 32) {

    }
}
function gameOver() {
    background(0)
    textAlign(CENTER)
    fill("white")
    text("Game Over!", width / 2, height / 2)
    text("Enter you name to be on the Scoreboard, and click START to play again", width / 2, 3 * height / 4)
}
// reset game
function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2
        player.position.y = height - 25
        enemy.position.x = width / 2
        enemy.position.y = 0
        enemy2.position.x = width / 4
        enemy2.position.y = -20
        enemy3.position.x = width / 6
        enemy3.position.y = 10
        enemy4.position.x = width / 8
        enemy4.position.y = -45
    }
}
