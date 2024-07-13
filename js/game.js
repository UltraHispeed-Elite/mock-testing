function gameSetup() {
    let screen = createCanvas(600,600);
    screen.position(0,0);

    mapSetup();
    playerSetup();
}

function gameDraw() {
    background("black");

    playerDraw();
}