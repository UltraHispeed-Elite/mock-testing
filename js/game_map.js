var game_map;
var starting_point;
var current_point;

function mapSetup() {
    game_map = createMap(9, 9, 16);
    console.log(game_map);

    locateStartingMap();

    current_point = starting_point;
    checkSurroundingRooms();
    console.log(starting_point);
}

function mapDraw() {

}

function locateStartingMap() {
    for(let i = 0; i < game_map.length; i++) {
        for(let j = 0; j < game_map[i].length; j++) {
            if(game_map[i][j] === 1) {
                starting_point = [i, j];
            }else {
                continue;
            }
        }
    }
}

function checkSurroundingRooms() {
    let points = current_point;

    if((points[0]-1) > 0) {
        new Sprite(300, 100, 25, 25);
    }

    if((points[1]-1) > 0) {
        new Sprite(100, 300, 25, 25);
    }

    if((points[0]+1) > 0) {
        new Sprite(300, 500, 25, 25);
    }

    if((points[1]+1) > 0) {
        new Sprite(500, 300, 25, 25);
    }
}