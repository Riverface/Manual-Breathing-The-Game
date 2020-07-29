import "../libraries/MathFunctions.js";
import "lerp";
import lerp from "lerp";


export function Resource(
    name,
    critPower,
    quantity,
    tickRate,
    batchSize,
    multiplier,
    offloadMultiplier,
    fumbleRate,
    critRate,
    harvestRate,
    fumbleMultiplier
) {
    this.name = name;
    this.quantity = quantity;
    this.tickRate = tickRate;
    this.multiplier = multiplier;
    this.harvestRate = harvestRate;
    this.harvestPhase = harvestPhase;
    this.offloadMultiplier = offloadMultiplier;
    this.batchSize = batchSize;
    this.fumbleRate = fumbleRate;
    this.critRate = critRate;
    this.critPower = critPower;
    this.curLoad = curLoad;
    this.fumbleMultiplier = fumbleMultiplier;
}