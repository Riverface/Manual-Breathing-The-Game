import { types } from "@babel/core";
import "./Models/Resource.js";
import $, { getJSON } from "jquery";
// import Player from "./Models/Player.js";
import { grabPlayer } from "./Models/jsonhelper.js";
import { harvest, deliver } from "./DB/skillsDB.js";
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
            console.log(player);
            console.log(player.resources[index]);

            harvest(player, player.resources[index], 1);


            setTimeout(() => {
                deliver(player, player.resources[index], 1);
            }, player.TickRate);
        }
    }, player.TickRate);
}