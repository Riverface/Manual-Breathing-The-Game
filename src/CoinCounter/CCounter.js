function coinCounter(
    money = 1018,
    x = {
        x: 0,
        q: 0,
        d: 0,
        n: 0,
        p: 0,
    },
    mode = true
) {
    const quarter = (o) => (o - (o % 25)) / 25 > 0;
    const dime = (o) => (o - (o % 10)) / 10 > 0;
    const nickel = (o) => (o - (o % 5)) / 5 > 0;
    const penny = (o) => o - (o % 1) / 1 > 0;
    const nonzero = (o) => o > 0;
    const nonsingle = (o) => o != 1;
    const arebool = (o) => o == nonsingle();
    const areIs = (o) => (arebool(o) ? "is" : "are");
    const ies = (o) => (arebool(o) ? "ny" : "nies");
    const plural = (o) => (arebool(o) ? "" : "s");
    const quarters = (o) => `\n There ${areIs(o)}  ${o}  quarter${plural(o)}`;
    const dimes = (o) => `\n There ${areIs(o)}  ${o}  dime${plural(o)}`;
    const nickels = (o) => `\n There ${areIs(o)}  ${o}  nickel${plural(o)}`;
    const pennies = (o) => `\n There ${areIs(o)}  ${o}  pen${ies(o)}`;
    let coin = 0;
    if (nonzero(money)) {
        switch (true) {
            case quarter(money):
                x.q++;
                coin = 25;
                break;
            case dime(money):
                x.d++;
                coin = 10;
                break;
            case nickel(money):
                x.n++;
                coin = 5;
                break;
            case penny(money):
                x.p++;
                coin = 1;
                break;
            default:
                money = 0;
                break;
        }
        money -= coin;
        coinCounter(money, x, mode);
    }
    return mode ? quarters(x.q) + dimes(x.d) + nickels(x.n) + pennies(x.p) : x;
}

console.log(
    coinCounter(
        (money = 25 * 1.4),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);
console.log(
    coinCounter(
        (money = 25 * 1.4),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);

console.log(
    coinCounter(
        (money = 10 * 1.4),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);

console.log(
    coinCounter(
        (money = 5),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);

console.log(
    coinCounter(
        (money = 25),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);
console.log(
    coinCounter(
        (money = 25),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);

console.log(
    coinCounter(
        (money = 10),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);

console.log(
    coinCounter(
        (money = 5),
        (x = {
            x: 0,
            q: 0,
            d: 0,
            n: 0,
            p: 0,
        }),
        (mode = true)
    )
);