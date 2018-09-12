var player;
// background image
var img;
var pipes;

//timer
function preload() {
    imgImg = loadImage("https://i.imgur.com/aKQOg3G.png");

}
function setup() {
    createCanvas(1000, 700);
    player = createSprite(50, 400, 100, 100, 40); //(x, y, w, h)
    pipes = new Group();


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

    //below sets pace for Helo movement
    player.position.y = player.position.y + 8
    player.position.x = player.position.x + 0



    //needed to render sprites
    drawSprites()
}



function gameOver() {
    background(0)
    textAlign(CENTER)
    fill("white")
    text("Game Over!", width / 2, height / 2)
    text("Enter you name to be on the Scoreboard, and click START to play again", width / 2, 3 * height / 4)
}
