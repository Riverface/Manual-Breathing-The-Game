import getRandomArbitrary from "../libraries/MathFunctions.js";
import "lerp";
import lerp from "lerp";

export function harvest(resource, harvestPhase = 0) {
    console.log('Harvesting, fail rate of ', resource.fumbleRate);
    setTimeout(() => {
        switch (getRandomArbitrary) {
            case value:

                break;

            default:
                break;
        }
        if (getRandomArbitrary(resource.fumbleRate, 1) == resource.fumbleRate) {
            resource.batchSize += harvestPhase * resource.multiplier * resource.fumbleMultiplier;
            console.log("Harvest fumbled! Only got, " + (resource.multiplier * resource.fumbleMultiplier));
        } else if (getRandomArbitrary(resource.critRate, 1) == resource.critRate) {
            resource.batchSize += harvestPhase * multiplier * resource.critPower;
            console.log("Batch is increased to " + resource.batchSize + " " + resource.name);
        }

        if (harvestPhase > 3) {
            console.log("Done harvesting! o7");
        } else {
            harvestPhase++;
            harvest(resource, harvestPhase);
        }
    }, resource.harvestRate * harvestPhase);
};

export function deliver(resource, deliverPhase = 0) {
    const delAmountFumble = resource.offloadMultiplier * resource.fumbleMultiplier;
    const delAmountCrit = resource.offloadMultiplier * resource.critPower;

    setTimeout(() => {
        if (getRandomArbitrary(resource.fumbleRate, 1) == resource.fumbleRate) {
            if (resource.batchSize -= delAmountFumble >= 0) {
                lerp(resource.quantity, resource.quantity + delAmountFumble, 1);
                lerp(resource.batchSize, resource.batchSize -= delAmountFumble), 1;
            } else {
                lerp(resource.quantity, resource.quantity += resource.batchSize, 1);
                lerp(resource.quantity, 0, 1);
            }
        } else if (getRandomArbitrary(resource.critRate, 1) == resource.critRate) {
            if (resource.batchSize -= resource.offloadMultiplier * batchSize >= 0) {
                lerp(resource.quantity, (resource.quantity + delAmountCrit), 1);
                lerp(resource.batchSize, (resource.batchSize - delAmountCrit), 1);
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


};