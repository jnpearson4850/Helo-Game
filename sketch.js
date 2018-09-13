var player;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var enemy7;
var isGameOver
var isNextLevel

function preload() {

}
function setup() {
    createCanvas(windowWidth, windowHeight);
    isNextLevel = false;
    isGameOver = false;
    // player sprite
    player = createSprite(width / 2, 700, 50, 100, 40); //(x, y, w, h)
    //goal line for next level
    goalLine = createSprite(0, 50, 10000, 5)

    //objects
    enemy = createSprite(width / 2, 0, 20, 60);
    enemy.rotationSpeed = 4.0
    enemy2 = createSprite(width / 2, 0, 60, 20);
    enemy2.rotationSpeed = 2.0
    enemy3 = createSprite(width / 2, 0, 40, 20);
    enemy3.rotationSpeed = 6.0
    enemy4 = createSprite(width / 2, 0, 10, 30);
    enemy4.rotationSpeed = 6.0
    enemy5 = createSprite(width / 2, 0, 10, 30);
    enemy5.rotationSpeed = 1.0
    enemy6 = createSprite(width / 2, 0, 10, 30);
    enemy6.rotationSpeed = 10.0
    enemy7 = createSprite(width / 2, 0, 10, 30);

}


function draw() {
    background(0, 0, 0, 15);
    if (isGameOver) {
        gameOver()
    }
    if (isNextLevel) {
        nextLevel()
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
        if (enemy5.overlap(player)) {
            isGameOver = true;
        }
        if (enemy6.overlap(player)) {
            isGameOver = true;
        }
        if (enemy7.overlap(player)) {
            isGameOver = true;
        }
        if (goalLine.overlap(player)) {
            isNextLevel = true
        }
        //ability to move the player
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x = player.position.x + 5;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x - 5;
        }
        if (keyDown(40) && player.position.x > 25) {
            player.position.y = player.position.y + 5;
        }
        if (keyDown(38) && player.position.x > 25) {
            player.position.y = player.position.y - 5;
        }
        //below makes the wall and enemys move
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
        enemy5.position.y = enemy5.position.y + 10;
        if (enemy5.position.y > height) {
            enemy5.position.y = 0;
            enemy5.position.x = random(18, width - 9)
        }
        enemy6.position.y = enemy6.position.y + 22;
        if (enemy6.position.y > height) {
            enemy6.position.y = 0;
            enemy6.position.x = random(11, width - 5)
        }
        enemy7.position.y = enemy7.position.y + 6;
        if (enemy7.position.y > height) {
            enemy7.position.y = 0;
            enemy7.position.x = random(2, width - 2)
        }
        //set screen at -100 pixels to start game
        //needed to render sprites
        drawSprites()
    }
}
function nextLevel() {
    background(0)
    textAlign(CENTER)
    fill("white")
    text("Great Job!", width / 2, height / 2)
    text("Next Level is about to begin!! Click anywhere", width / 2, 3 * height / 4)
}

function gameOver() {
    background(0)
    textAlign(CENTER)
    fill("white")
    text("Game Over!", width / 2, height / 2)
    text("Good Job. But you gotta be quicker!! Click refresh to play again", width / 2, 3 * height / 4)
}
// reset game
function mouseClicked() {
    if (isNextLevel) {
        isNextLevel = false;
        player.position.x = width / 2
        player.position.y = 700
        enemy.position.x = width / 2
        enemy.position.y = 0
        enemy2.position.x = width / 4
        enemy2.position.y = -90
        enemy3.position.x = width / 6
        enemy3.position.y = 25
        enemy4.position.x = width / 8
        enemy4.position.y = -20

    }
}
// function mouseClicked() {
//     if (isGameOver) {
//         isGameOver = false;
//         player.position.x = 400
//         player.position.y = 605
//         enemy.position.x = width / 2
//         enemy.position.y = 0
//         enemy2.position.x = width / 4
//         enemy2.position.y = -20
//         enemy3.position.x = width / 6
//         enemy3.position.y = 10
//         enemy4.position.x = width / 8
//         enemy4.position.y = -45

//     }
// }


