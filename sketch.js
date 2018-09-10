var player;
var walls;


// background image
var img;

function preload() {
    imgImg = loadImage("https://i.imgur.com/aKQOg3G.png");
}
function setup() {
    createCanvas(5000, 700);
    player = createSprite(100, 400, 100, 100);
    walls = createSprite(50, 50, 50, 100)
    for (var i = 0; i < 50; i++) {
        walls.push(new Roadblocks())
    }
}

function draw() {
    // background(50, 205, 0)
    background(imgImg)

    // below used to move Helo
    if (keyDown(32) && player.position.y < height) {
        player.position.y = player.position.y - 15;
    }
    //below sets pace for Helo movement
    player.position.y = player.position.y + 10
    player.position.x = player.position.x + 5

    drawSprites()
}





function gameOver() {
    background(0)
    textAlign(CENTER)
    fill("white")
    text("Game Over!", width / 2, height / 2)
    text("Enter you name to be on the Scoreboard, and click START to play again", width / 2, 3 * height / 4)
}
