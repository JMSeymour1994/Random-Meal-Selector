
const listOfMeals = [
    "Pizza",
    "Stir fry",
    "Roast",
    "Take away",
    "Chilli",
    "Mushroom pasta",
    "Lasagne",
    "Fish and chips",
    "Halloumi burgers",
    "Fishcakes",
    "Mozzarella Burgers"
];

const numOfDays = 7;

/**
 * This function takes in an array of meal choices and returns 
 * a random selection equal to the number of days input
 * @param {array} listOfMeals 
 * @param {number} numOfDays 
 * @returns {array} 
 */
function mealRandomiser(listOfMeals, numOfDays) {

    function shuffle() {
    for (let i = listOfMeals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [listOfMeals[i], listOfMeals[j]] = [listOfMeals[j], listOfMeals[i]];
    }
    return listOfMeals.slice(0, numOfDays);
    }

    return shuffle();
}

export default mealRandomiser(listOfMeals, numOfDays);
