function createMap(height, width, size) {
    let map = [];
    let map_size = [height, width];
    let starting_room_pos = [null, null];
    let rooms = [];
    let room_size = size;
    let room_count = 0;


    // sets map size
    map.length = map_size[0];
    for(let i = 0; i < map.length; i++) {
        map[i] = [];
        map[i].length = map_size[1];
        for(let j = 0; j < map[i].length; j++) {
            map[i][j] = 0;
        }
    }

    // creates starting room
    let r_y = Math.floor(random(0, map_size[0]));
    let r_x = Math.floor(random(0, map_size[1]));

    map[r_y][r_x] = 1;

    starting_room_pos[0] = r_y;
    starting_room_pos[1] = r_x;

    let r_data = {
        type: 1,
        y: r_y,
        x: r_x
    };

    rooms.push(r_data);
    room_count = 1;

    //generates other rooms
    for(room_count; room_count < room_size; room_count++) {
        let branch = Math.floor(random(0, rooms.length));
        let x_o_y = Math.floor(random(0,2));
        let u_o_d = Math.floor(random(0,2));

        let r_y = rooms[branch].y;
        let r_x = rooms[branch].x;

        if(x_o_y === 0) {
            if(r_x === 0) {
                r_x += 1;
            }else if(r_x === (map_size[1]-1)){
                r_x -= 1;
            }else {
                if(u_o_d === 0) {
                    r_x -= 1;
                }else {
                    r_x += 1;
                }
            }
        }else if(x_o_y === 1) {
            if(r_y === 0) {
                r_y += 1;
            }else if(r_y === (map_size[0]-1)){
                r_y -= 1;
            }else {
                if(u_o_d === 0) {
                    r_y -= 1;
                }else {
                    r_y += 1;
                }
            }
        }

        let new_pos = [r_y, r_x];
        let no_match = true;;

        for(let j = 0; j < rooms.length; j++) {
            let compare_pos = [rooms[j].y, rooms[j].x];

            if(new_pos[0] === compare_pos[0] && new_pos[1] === compare_pos[1]) {
                no_match = false;
                break;
            }else {
                continue;
            }
        }

        if(no_match === false) {
            room_count--
            continue;
        }else {
            let data = {
                type: 2,
                y: new_pos[0],
                x: new_pos[1]
            };

            map[new_pos[0]][new_pos[1]] = 2;

            rooms.push(data);
        }
    }

    return map;
}