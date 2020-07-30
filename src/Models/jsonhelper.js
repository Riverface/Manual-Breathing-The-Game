export function grabPlayer() {

    let player = require("../DB/playerdata.json");
    console.log('inside jsonhelper.js', player);

    return player;
}