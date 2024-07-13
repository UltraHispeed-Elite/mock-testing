var game_map;
var starting_point;

function mapSetup() {
    game_map = createMap(9, 9, 16);
    console.log(game_map);

    locateStartingMap();
    console.log(starting_point)
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