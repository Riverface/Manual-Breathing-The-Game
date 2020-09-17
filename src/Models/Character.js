/*jshint esversion:9 */
// Load the full build.
var _ = require('lodash');

// Load Chance
var Chance = require('chance');

// Instantiate Chance so it can be used
var chance = new Chance();
// Use Chance here.


export const storeState = () => {
    let currentState = {};
    return (stateChangeFunction) => {
        const newState = stateChangeFunction(currentState);
        currentState = {...newState };
        return newState;
    };
};

export const stateChanger = storeState();


//state/value/person
//inner/outer
//

export const roll_SingleAttribute_Practical = () => {
    let minProp;
    let maxProp;
    return (minProp) => {
        return (maxProp) => ({
            ...maxProp,
            ["statMax"]: maxProp,
            ["statMin"]: minProp,
            ["statBase"]: Math.round(Math.max(minProp, Math.min(maxProp, Math.random() * 10))),
            ["statModified"]: 0,
        });
    };
};



export const roll_Attributes = () => {

    return (attributes) => ({
        ...attributes,
        ["muscle"]: roll_SingleAttribute_Practical(true)(0)(10),
        ["clarity"]: roll_SingleAttribute_Practical(true)(0)(10),
        ["quickness"]: roll_SingleAttribute_Practical(true)(0)(10),
        ["judgement"]: roll_SingleAttribute_Practical(true)(0)(10),
        ["fortune"]: roll_SingleAttribute_Practical(true)(0)(10),
    });
};
export const newCharacter = () => {
    let firstName = chance.first();
    let lastName = chance.last();
    let character = {};
    return (character) => ({
        ...character,
        ["firstName"]: firstName,
        ["lastName"]: lastName,
        ["name"]: firstName + " " + lastName,
        ["attributes"]: {},
        ["neurons"]: {},
    });
}
export const generate_Character = () => {
    let firstName = chance.first();
    let lastName = chance.last();
    const temporaryCharacter = Object.assign(newCharacter()());
    const generatedPracticals = Object.assign(generate_practicals(temporaryCharacter)());
    console.log(temporaryCharacter);
    console.log(generatedPracticals);
    const att = generatedPracticals.attributes;
    const neur = generatedPracticals.neurons;
    return () => ({
        ...temporaryCharacter,
        ["firstName"]: firstName,
        ["lastName"]: lastName,
        ["name"]: firstName + " " + lastName,
        ["attributes"]: att,
        ["neurons"]: neur,
    });
};

export const generate_practicals = (character) => {
    let att = roll_Attributes(character)();
    let neur = generate_Neurons(character)(character.neurons);
    neur = calculate_Neurons()(att)(neur);

    return () => ({
        ...character,
        ["attributes"]: att,
        ["neurons"]: neur,
    });

}

export const generate_Neurons = () => {

    return (neurons) => ({
        ...neurons,
        ["atkspd"]: 0,
        ["meleeAtk"]: 0,
        ["accuracy"]: 0,
        ["maxHP"]: 0,
        ["maxMP"]: 0,
        ["IQ"]: 0,
        ["magicAtk"]: 0,
        ["castSpeed"]: 0,
        ["castRange"]: 0,
        ["maxRage"]: 0,
        ["maxGuile"]: 0,
        ["guile"]: 0,
        ["critRate"]: 0,
        ["critPower"]: 0,
        ["maxWeight"]: 0,
        ["belief"]: 0,
        ["karma"]: 0,
        ["attacks"]: 0,
        ["attackDice"]: 0,
        ["intention"]: 0,
        ["evasion"]: 0,
        ["intentionMax"]: 100,
        ["elementalAffinities"]: {
            ["fire"]: 0,
            ["water"]: 0,
            ["earth"]: 0,
            ["air"]: 0,
            ["pride"]: 0,
            ["pure"]: 0,
            ["pressure"]: 0,
            ["poison"]: 0,
            ["toxic"]: 0,
            ["radioactive"]: 0,
            ["nerve"]: 0,
            ["sonic"]: 0,
        },
    });

};
export const calculate_Neurons = () => {


    return (attributes) => {
        let muscle = attributes.muscle.statBase;
        let clarity = attributes.clarity.statBase;
        let quickness = attributes.quickness.statBase;
        let judgement = attributes.judgement.statBase;
        let fortune = attributes.fortune.statBase;

        return (neurons) => ({

            ...neurons,
            ["atkspd"]: (quickness + muscle),
            ["meleeAtk"]: (quickness + muscle),
            ["accuracy"]: (quickness + judgement + fortune),
            ["maxHP"]: Math.log(muscle),
            ["maxMP"]: clarity + judgement,
            ["IQ"]: 10 * clarity + judgement,
            ["magicAtk"]: clarity + fortune,
            ["castSpeed"]: clarity + judgement + quickness,
            ["castRange"]: clarity + muscle,
            ["maxRage"]: (muscle + judgement + clarity),
            ["maxGuile"]: (quickness + judgement),
            ["guile"]: Math.ceil(neurons.maxGuile, neurons),
            ["critRate"]: (quickness + clarity + fortune),
            ["critPower"]: (quickness + muscle),
            ["maxWeight"]: (muscle + judgement),
            ["belief"]: (fortune + -judgement),
            ["karma"]: 0,
            ["attacks"]: (quickness + clarity),
            ["attackDice"]: (quickness + fortune),
            ["intention"]: 0,
            ["evasion"]: 0,
            ["intentionMax"]: 100,
            ["elementalAffinities"]: {
                ["fire"]: 0,
                ["water"]: 0,
                ["earth"]: 0,
                ["air"]: 0,
                ["pride"]: 0,
                ["pure"]: 0,
                ["pressure"]: 0,
                ["poison"]: 0,
                ["toxic"]: 0,
                ["radioactive"]: 0,
                ["nerve"]: 0,
                ["sonic"]: 0,
            },
        });
    };
};
export const aggress = (character) => {
    console.log(character);
    let intention = character.neurons.intention;
    let intentionMax = character.neurons.intentionMax;
    if (character.canAggress) {
        if (character.neurons.intention == character.neurons.intentionMax) {
            execute(character)(target);
        }
        return (target) => ({
            ...character,
            ["intention"]: character.intention += 1,
            ["Decision"]: character.rollDecision(),
        });
    }
};
export const decisionPool = () => {
    return ["melee", "ranged", "skill", "guard", "item", "magic"];
};


export const rollDecision = () => {

    return decisionPool[Math.random() * decisionPool.length];
};
const statRoll = (character) => {
    return (stat) => ({
        ...neurons,
        [stat.name + "accRoll"]: chance.rpg(character.neurons.attacks + "d" + 20, { sum: true }),
    });
};

const didHeCrit = (character) => {
    if (character.neurons.accRoll == 20) {
        accRoll(character);
        if (character.neurons.accRoll == 20) {
            return (character) => ({
                ...character,
                ["impendingDamage"]: impendingDamage * critPower,
            });
        }
    }
};
const howHardWasIt = () => {
    return (neurons) => ({
        ...neurons,
        ["impendingDamage"]: statRoll(["meleeAtk"]),
    });
};
const execute = (character) => {

    if (character.neurons.decision == "melee") {
        let attack = howHardWasIt(character.neurons);
        let critAttack = didHeCrit(character);
        return (target) => ({
            ...target,
            ["health"]: ["health"] - attack,
        });
    } else if (character.neurons.decision == "ranged") {
        let attackRanged = howHardWasIt(character.neurons);

        return (target) => ({
            ...target,
            ["health"]: health - attackRanged,
        });
    }
};

// We create two functions using our function factory. We could easily create many more.