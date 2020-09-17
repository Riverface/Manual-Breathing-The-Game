// /*jshint esversion:6 */
// // This function stores our state.

// export const storeState = () => {
//     let currentState = {};
//     return (stateChangeFunction) => {
//         const newState = stateChangeFunction(currentState);
//         currentState = {...newState };
//         return newState;
//     };
// };

// export const stateChanger = storeState();

// // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
// //state/value/person
// //inner/outer
// //

// export const changeState = (prop) => {
//     let fedby = " last fed by";
//     return (person) => {
//         return (value) => {
//             return (state) => {
//                 return (target) => ({
//                     ...state,
//                     [prop]: (state[prop] || 0) + value,
//                     ["fedby"]: fedby,
//                     ["person"]: person || " Nobody???",

//                 });
//             };
//         };
//     };
// };

// // We create two functions using our function factory. We could easily create many more.

// export const feed = changeState("soil");
// export const soilFood = changeState("soil")("dad")(5);

// export const feedWater = changeState("water");
// export const waterFood = changeState("water")("dad")(5);

// export const corpsesFood = changeState("corpses")("dad")(5);
// export const feedCorpses = changeState("corpses");

// export const wormsFood = changeState("worms")("dad")(5);
// export const feedWorms = changeState("worms");

// export const feedFertilizer = changeState("fertilizer");
// export const fertilizerFood = changeState("fertilizer")("dad")(5);

// export const feedMushrooms = changeState("mushrooms");
// export const mushroomsFood = changeState("mushrooms")("dad")(5);

// $(document).ready(function() {
//     // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
//     soilClick();
//     waterClick();
//     corpsesClick();
//     fertilizerClick();
//     mushroomClick();
// });

// function tick() {}

// function soilClick() {
//     setInterval(() => {
//         const soilState = stateChanger(soilFood);
//         console.log(soilState);
//         $("#mainLog").append(
//             `The soil is ${soilState.soil}, ${soilState.fedby} ${soilState.person}!`
//         );
//         storeState(soilState);
//     }, 100);
//     $("#feed").on("click", function() {});
// }

// function waterClick() {
//     $("#feedWater").on("click", function() {
//         const waterState = stateChanger(waterFood);
//         $("#mainLog").append(
//             `The level of water is ${waterState.water}, ${waterState.fedby} ${waterState.person}!`
//         );
//         storeState(waterState);
//     });
// }

// function corpsesClick() {
//     $("#feedCorpses").on("click", function() {
//         const corpsesState = stateChanger(corpsesFood);
//         $("#mainLog").append(
//             `The level of corpses is ${corpsesState.corpses}, ${corpsesState.fedby} ${corpsesState.person}!`
//         );
//         storeState(corpsesState);
//     });
// }

// function fertilizerClick() {
//     $("#feedFertilizer").on("click", function() {
//         const fertilizerState = stateChanger(fertilizerFood);
//         $("#mainLog").append(
//             `The level of fertilizer is ${fertilizerState.fertilizer}, ${fertilizerState.fedby} ${fertilizerState.person}!`
//         );
//         storeState(fertilizerState);
//     });
// }

// function mushroomClick() {
//     $("#feedMushrooms").on("click", function() {
//         const mushroomsState = stateChanger(mushroomsFood);
//         $("#mainLog").append(
//             `The level of mushrooms is ${mushroomsState.mushrooms}, ${mushroomsState.fedby} ${mushroomsState.person}!`
//         );
//         storeState(mushroomsState);
//     });
// }