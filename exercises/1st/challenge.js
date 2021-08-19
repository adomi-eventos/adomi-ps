/*
 * Exercise description: 
 *
 * Given a list of integer numbers, print on screen if  
 * its numbers are odd or even just using a single line.
 *
 */


/**
 * Defining the main function of the exercise (self-invoked)
 * and exporting it to run jest unitary tests.
 */
module.exports = (function main() {

    // Instancing the "list" variable to storage all verification target numbers.
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Printing on screen if each number is odd or even using just a single line.
    list.forEach(number => { number % 2 == 0 ? console.log(`${number} is even!`) : console.log(`${number} is odd!`)})

    // Returning standard machine-readable success answer.
    return 0;

})();