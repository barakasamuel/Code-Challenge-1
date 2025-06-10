// Named my function as calculateChaiIngredients and assigned number of cups as argument
function calculateChaiIngredients(numberOfCups) {


    const Essentials = {
        water: 200 * numberOfCups,
        milk: 50 * numberOfCups,
        teaLeaves: 1 * numberOfCups,
        sugar: 2 * numberOfCups,
    };
    // expected output
    return `To make ${numberOfCups} cups of chai, you will need:
        Water: ${Essentials.water} ml
        Milk: ${Essentials.milk} ml
        Tea Leaves: ${Essentials.teaLeaves} tsp
        Sugar: ${Essentials.sugar} tsp`;
}

const cupsInput = prompt("Enter the number of cups of chai you want to make:");
const numberOfCups = parseInt(cupsInput, 10);
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    console.log(calculateChaiIngredients(numberOfCups));
} else {
    console.log("Please enter a valid positive number for cups.");
}