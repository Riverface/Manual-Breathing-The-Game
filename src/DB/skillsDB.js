import "../libraries/MathFunctions.js";
import "lerp";
import lerp from "lerp";
import getRandomArbitrary from "../libraries/MathFunctions.js";
import rollDice from "../libraries/MathFunctions.js";
import "../plant.js";

export function harvest(player, resource, harvestPhase = 0, workers = 1) {
    console.log("Harvesting, fail rate of ", resource.fumbleRate);
    let rolled = rollDice(6, 3, 6, 1, [], 3);
    setTimeout(() => {
        switch (rolled) {
            case rolled[0] == "crit":
                resource.batchSize +=
                    harvestPhase * rolled[1] * multiplier * resource.critPower;
                console.log(
                    "Batch is increased to " + resource.batchSize + " " + resource.name
                );
                break;
            case rolled[0] == "pass":
                break;
            case rolled[0] == "fail":
                resource.batchSize +=
                    harvestPhase *
                    rolled[1] *
                    resource.multiplier *
                    resource.fumbleMultiplier;
                console.log(
                    "Harvest fumbled! Only got, " +
                    resource.multiplier * resource.fumbleMultiplier
                );
                break;
            case rolled[0] == "critfail":
                player.meters[0];
                resource.batchSize +=
                    harvestPhase *
                    rolled[1] *
                    resource.multiplier *
                    resource.fumbleMultiplier;
                console.log(
                    "Harvest fumbled! Only got, " +
                    resource.multiplier * resource.fumbleMultiplier
                );
                break;
        }
        if (harvestPhase > 3) {
            console.log("Done harvesting! o7");
        } else {
            harvestPhase++;
            harvest(resource, harvestPhase);
        }
    }, resource.harvestRate * harvestPhase);
}

export function deliver(resource, deliverPhase = 0, workers = 1) {
    const delAmountFumble =
        resource.offloadMultiplier * resource.fumbleMultiplier;
    const delAmountCrit = resource.offloadMultiplier * resource.critPower;
    setTimeout(() => {
        switch (rolled) {
            case rolled[0] == "crit":
                resource.batchSize +=
                    harvestPhase * rolled[1] * multiplier * resource.critPower;
                console.log(
                    "Batch is increased to " + resource.batchSize + " " + resource.name
                );
                break;
            case rolled[0] == "pass":
                break;
            case rolled[0] == "fail":
                resource.batchSize +=
                    harvestPhase *
                    rolled[1] *
                    resource.multiplier *
                    resource.fumbleMultiplier;
                console.log(
                    "Harvest fumbled! Only got, " +
                    resource.multiplier * resource.fumbleMultiplier
                );
                break;
            case rolled[0] == "critfail":
                player.meters[0];
                resource.batchSize +=
                    harvestPhase *
                    rolled[1] *
                    resource.multiplier *
                    resource.fumbleMultiplier;
                console.log(
                    "Harvest fumbled! Only got, " +
                    resource.multiplier * resource.fumbleMultiplier
                );
                break;
        }
        if (harvestPhase > 3) {
            console.log("Done harvesting! o7");
        } else {
            harvestPhase++;
            harvest(resource, harvestPhase);
        }
    }, resource.harvestRate * harvestPhase);

    setTimeout(() => {
        if (getRandomArbitrary(resource.fumbleRate, 1) == resource.fumbleRate) {
            if ((resource.batchSize -= delAmountFumble >= 0)) {
                lerp(resource.quantity, resource.quantity + delAmountFumble, 1);
                lerp(resource.batchSize, (resource.batchSize -= delAmountFumble)), 1;
            } else {
                lerp(resource.quantity, (resource.quantity += resource.batchSize), 1);
                lerp(resource.quantity, 0, 1);
            }
        } else if (getRandomArbitrary(resource.critRate, 1) == resource.critRate) {
            if ((resource.batchSize -= resource.offloadMultiplier * batchSize >= 0)) {
                lerp(resource.quantity, resource.quantity + delAmountCrit, 1);
                lerp(resource.batchSize, resource.batchSize - delAmountCrit, 1);
            } else {
                lerp(resource.quantity, resource.quantity + resource.batchSize, 1);
                lerp(resource.quantity, 0, 1);
            }
        }
        if (resource.batchSize == 0) {
            console.log("Done offloading! o7");
        } else {
            deliverPhase++;
            deliver(resource, deliverPhase);
        }
    }, resource.harvestRate * deliverPhase);
}

export function sacrifice(i, t) {
    setTimeout(() => {
        lerp(t, t + 1, 1);
        setTimeout(() => {
            i - 1;
        }, 1000);
    }, 1000);
}

export function seek(i, t) {
    setTimeout(() => {
        lerp(t, t + 1, 1);
        setTimeout(() => {
            lerp(i, i + 1, 1);
        }, 1000);
    }, 1000);
}

export function Pair(i, t) {
    setTimeout(() => {
        lerp(t, t + 1, 1);
        setTimeout(() => {
            lerp(i, i + 1, 1);
        }, 10000);
    }, 10000);
}