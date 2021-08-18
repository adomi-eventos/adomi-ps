/**
 * Exercise description: 
 *
 * Create a function that save the Fibonacci series numbers un-
 * til it reaches a "x" (parameter) iterations inside an array 
 * and print its values.
 * 
 */

/**
 * Returns the Fibonacci Number Series sequence with size "x".
 * @param x An integer numeric value.
 */
function getFibonacciSequence(x) {
    
    // Assinging the "fibonacciSequence" variable as an array.
    let fibonacciSequence = [];

    // Pushing "fibonacciSequence" array depending on "n" value.
    switch(x) {

        case 1:

            // Pushing the value "1" to index "0" of "fibonacciSequence" array.
            fibonacciSequence.push(1);

        break;

        case 2:

            // Pushing the value "1" to index "0" of "fibonacciSequence" array.
            fibonacciSequence.push(1);

            // Pushing the value "1" to index "1" of "fibonacciSequence" array.
            fibonacciSequence.push(1);

        break;

        default:
            
            // Pushing the value "1" to index "0" of "fibonacciSequence" array.
            fibonacciSequence.push(1);

            // Pushing the value "1" to index "1" of "fibonacciSequence" array.
            fibonacciSequence.push(1);

            // Pushing the value "fibonacciSequence[i-1] + fibonacciSequence[i-2]" to index "i" of "fibonacciSequence" array until "i" reachs "n-1".
            for(let i = 2; i < x; i++) {
                fibonacciSequence.push(fibonacciSequence[i-1] + fibonacciSequence[i-2]);
            }

        break;
    }

    // Returning the "fibonacciSequence" array.
    return fibonacciSequence;

}

/**
 * Main function of the exercise (self-invoked).
 */
 (function main() {
    
    // Assigning "fibonacciSequence" variable as the return of "getFibonacciSequence(8)" function.
    let fibonacciSequence = getFibonacciSequence(10);

    // Printing on screen the Fibonacci sequence of size 10 obtained by "getFibonacciSequence()" function one step before.
    console.log(fibonacciSequence);

    // Returning standard machine-readable success answer.
    return 0;

})();