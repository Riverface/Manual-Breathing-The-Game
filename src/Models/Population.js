import "./Wood.js";
import "./stone.js";
import "./Iron.js";
import "./blood.js";
import "./Silver.js";
import "./Gold.js";
import "./Alchemy.js";
import "./Population.js"
import { types } from "@babel/core";

function Population() {
    this.Population = save.Population;
    this.TickRate = 10000;
    this.Multiplier = .1;
    this.UnloadRate = .1;
    this.BotchRate = .50;
    this.CritRate = .04;
}