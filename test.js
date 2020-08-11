function coinCounter(money, counter) {
    const quarter = Math.floor(money / 25);
    const dime = Math.floor(money / 10);
    const nickel = Math.floor(money / 5);
    const penny = Math.floor(money / 1);
    const quarters = `There are ${counter.quarters} Quarters.`;
    const dimes = `There are ${counter.dimes} Dimes.`;
    const nickels = `There are ${counter.nickles} Nickels.`;
    const pennies = `There are ${counter.pennies} Pennies.`;
    const ccounter = coinCounter(money, counter);
    console.log(`${quarters} ${dimes} ${nickels} ${pennies}`);
    console.log(`${counter.counter}, ${counter.q}, ${counter.d}, ${counter.n}, ${counter.p}`);

    let coin = 0;
    if (money != 0) {
        if (quarter > 1) {
            console.log("Nothing is happening");
            money -= 25;
            counter.p++;
            return ccounter;
        } else if (dime > 1) {
            counter.n++;
            money -= 10;
            console.log("I have found a nickel" + counter.n + " times");
            return ccounter;
        } else if (nickel > 1) {
            money -= 5;
            counter.d++;
            console.log("I have found a dime" + counter.d + " times");
            return ccounter;
        } else if (penny > 1) {
            counter.q++;
            money -= 1;
            console.log("I have found a quarter" + counter.q + " times");
            return ccounter;
        }
        counter.loops++;
    }

    console.log(`${quarters} + ${dimes} + ${nickels} + ${pennies}`);
    return `${quarters} + ${dimes} + ${nickels} + ${pennies}`;
}

coinCounter(150, { loops: 0, quarters: 0, dimes: 0, nickles: 0, pennies: 0 });