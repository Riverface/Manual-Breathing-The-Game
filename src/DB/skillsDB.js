export function Harvest(harvestPhase) {
    setTimeout(() => {
        if (getRandomArbitrary(this.fumbleRate, 1) == this.fumbleRate) {
            this.batchSize += harvestPhase * multiplier * this.fumbleMultiplier;
            console.log("Harvesting fumbled! Only got, " + (this.multiplier * this.fumbleMultiplier));
        }
        if (getRandomArbitrary(this.critRate, 1) == this.critRate) {
            this.batchSize += harvestPhase * multiplier * this.critPower;
        }
        if (harvestPhase >= 3) {
            console.log("Done harvesting! o7");
        } else {
            this.Harvest(harvestPhase);
            harvestPhase++;
        }
    }, harvestRate * harvestPhase * tickRate);
};

export function Deliver() {
    const delAmountFumble = offloadMultiplier * this.fumbleMultiplier;
    const delAmountCrit = offloadMultiplier * this.critPower;

    setTimeout(() => {
        if (getRandomArbitrary(this.fumbleRate, 1) == this.fumbleRate) {
            if (this.batchSize -= delAmountFumble >= 0) {
                lerp(this.quantity, this.quantity + delAmountFumble);
                lerp(this.batchSize, this.batchSize -= delAmountFumble);
            } else {
                lerp(this.quantity, this.quantity += this.batchSize);
                lerp(this.quantity, 0);
            }
        } else if (getRandomArbitrary(this.critRate, 1) == this.critRate) {
            if (this.batchSize -= offloadMultiplier * batchSize >= 0) {
                lerp(this.quantity, (this.quantity + delAmountCrit));
                lerp(this.batchSize, (this.batchSize - delAmountCrit));
            } else {
                lerp(this.quantity, this.quantity + batchSize);
                lerp(this.quantity, 0);
            }
        }
        if (batchSize == 0) {
            console.log("Done offloading! o7");
        } else {
            this.Deliver(harvestPhase);
            deliverPhase++;
        }
    }, harvestRate * harvestPhase);


};