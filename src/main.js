import $ from 'jquery';
import bootstrap from "bootstrap";
var _ = require('lodash');


const { generate_Character, aggress } = require("./Models/Character");
$(document).ready(function() {
    $("#randomCharacter").on("click", function() {
        $("#main-log").append(test());
        test();
    });
});

const test = () => {
    let thisCharacter = Object.assign(generate_Character());
    let otherCharacter = Object.assign(generate_Character());
    let thisAtom = $(".atomicTemplate").clone();
    console.log(thisCharacter);

    setInterval(() => {
        aggress(thisCharacter)(otherCharacter);
        aggress(otherCharacter)(thisCharacter);
        console.log(thisCharacter);
        console.log(otherCharacter);
    }, 500);

    // thisAtom.find(".mus").html(`base MUS :<div class='statBox'>${thisCharacter.attributes.muscle.statBase}</div>`);
    // thisAtom.find(".cla").html(`base CLA :<div class='statBox'>${thisCharacter.attributes.clarity.statBase}</div>`);
    // thisAtom.find(".qui").html(`base QUI :<div class='statBox'>${thisCharacter.attributes.quickness.statBase}</div>`);
    // thisAtom.find(".jud").html(`base JUD :<div class='statBox'>${thisCharacter.attributes.judgement.statBase}</div>`);
    // thisAtom.find(".for").html(`base FOR :<div class='statBox'>${thisCharacter.attributes.fortune.statBase}</div>`);
    console.log(thisCharacter);
    $("#main-log").append(thisAtom);
    $("#whatjusthappened").text(thisAtom);
}