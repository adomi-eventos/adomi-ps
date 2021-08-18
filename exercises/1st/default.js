/*
 * Exercise description: 
 *
 * Create a function to check if a number is odd or even and apply it on 
 * the following list to print which numbers are even and which numbers 
 * are odd: list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
 * 
 */

/**
 * Returns "odd" or "even" depending on whether a number is odd or even.
 * @param number An integer numeric value.
 */
function isOddOrEven(number) {

    // Checking if the "number" param is odd or even by using a remainder by 2 arithmetic operator.
    if(number % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }

}

/**
 * Main function of the exercise (self-invoked).
 */
(function main() {
    
    // Instancing the "list" variable to storage all verification target numbers.
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Looping each element of "list" array using "for/of" method. The "forEach()" method is also an alternative.
    for(let element of list) {

        // Printing the result on screen.
        console.log(`${element} is ${isOddOrEven(element)}`);

    }

    // Returning standard machine-readable success answer.
    return 0;

})();