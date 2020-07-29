import { types } from "@babel/core";
import "./Models/Resource.js";
import $, { getJSON } from "jquery";
// import Player from "./Models/Player.js";
import { grabPlayer } from "./Models/jsonhelper.js";
$(document).ready(function() {
    Main();
});

function Main() {
    let player = grabPlayer();
    setInterval(() => {
        Tick(player);
    }, 1000);
}
// Tick for gems
function Tick(player) {

    setTimeout(() => {
        for (let index = 0; index < player.resources.length - 1; index++) {
            console.log();
            console.log(player.resources[index]);
            player.resources[index].Harvest(0);
            player.resources[index].Deliver(0);
        }
    }, player.TickRate);
}