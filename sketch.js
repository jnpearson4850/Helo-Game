
var player;
// background image
var img;

var enemy;
var enemy2;
var enemy3;
var enemy4;

var isGameOver

//timer
function preload() {
    imgImg = loadImage("https://i.imgur.com/aKQOg3G.png");
}
function setup() {
    createCanvas(1000, 700);
    isGameOver = false;
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
    background(50, 205, 0)

    if (isGameOver) {
        gameOver()
    } else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        if (enemy2.overlap(player)) {
            isGameOver = true;
        }
        if (enemy3.overlap(player)) {
            isGameOver = true;
        }
        if (enemy4.overlap(player)) {
            isGameOver = true;
        }
        if (wall.overlap(player)) {
            isGameOver = true;
        }
        if (wall1.overlap(player)) {
            isGameOver = true;
        }
        if (tri1.overlap(player)) {
            isGameOver = true;
        }
        if (tri2.overlap(player)) {
            isGameOver = true;
        }

        // background(0, 0, 100)//RGB attributes for the color of the background
        // background(backgroundImage)
        //adding ability to move the sprite, will go back and add up down as well
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x = player.position.x + 5;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 5;
        }
        enemy.position.y = enemy.position.y + 10;
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(5, width - 5)
        }
        enemy2.position.y = enemy2.position.y + 8;
        if (enemy2.position.y > height) {
            enemy2.position.y = 0;
            enemy2.position.x = random(30, width - 2)
        }
        enemy3.position.y = enemy3.position.y + 12;
        if (enemy3.position.y > height) {
            enemy3.position.y = 0;
            enemy3.position.x = random(11, width - 2)
        }
        enemy4.position.y = enemy4.position.y + 15;
        if (enemy4.position.y > height) {
            enemy4.position.y = 0;
            enemy4.position.x = random(20, width - 2)
        }
        wall.position.y = wall.position.y - 3
        if (wall.position.y > height) {
            wall.position.y = 0;
            wall.position.y = random(20, width - 2)
        }
        wall1.position.y = wall1.position.y - 4
        if (wall1.position.y > height) {
            wall1.position.y = 0;
            wall1.position.y = random(20, width - 2)
        }
        tri1.position.y = tri1.position.y - 4
        if (tri1.position.y > height) {
            tri1.position.y = 0;
            tri1.position.y = random(20, width - 2)
        }
        tri2.position.y = tri2.position.y - 4
        if (tri2.position.y > height) {
            tri2.position.y = 0;
            tri2.position.y = random(20, width - 2)
        }
        // background(imgImg)
        //set screen at -100 pixels to start game
        translate(100, 0)

        // below used to move Helo(up, right, left)
        if (keyDown(32) && player.position.y < height) {
            player.position.y = player.position.y - 15;
        }
        if (keyDown(39) && player.position.x < height) {
            player.position.x = player.position.x + .5
        }
        if (keyDown(37) && player.position.x < height) {
            player.position.x = player.position.x - .5
        }

        // set pace for walls
        wall.position.x = wall.position.x - 1
        wall1.position.x = wall1.position.x - 1

        tri1.position.x = tri1.position.x - 1
        tri2.position.x = tri2.position.x - 1

        //below sets pace for Helo movement
        player.position.y = player.position.y + 8
        player.position.x = player.position.x + 0

        //set objects moving at player

        //needed to render sprites
        drawSprites()
    }



    function gameOver() {
        background(0)
        textAlign(CENTER)
        fill("white")
        text("Game Over!", width / 2, height / 2)
        text("Enter you name to be on the Scoreboard, and click anywhere to play again", width / 2, 3 * height / 4)
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
}