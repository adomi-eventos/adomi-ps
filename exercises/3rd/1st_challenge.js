/**
 * Exercise description: 
 *
 * Given a "getFibonacciSequence()" function, create another func-
 * tion that receives it fibonacci sequence array and returns the
 * sum of its elements.
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
 * Returns the sum of all elements inside an array using "forEach" method.
 * @param array An array object.
 */
function getSumOfAllIn(array) {
    
    // Defining and instancing the "sum" variable as 0. 
    let sum = 0;

    // Looping the target array summing all elements to "sum" variable.
    array.forEach( element => {
        sum += element;
    })

    // Returning the "sum" variable.
    return sum;
}

/**
 * Main function of the exercise (self-invoked).
 */
 (function main() {
    
    // Assigning "fibonacciSequence" variable as the return of "getFibonacciSequence(8)" function.
    let fibonacciSequence = getFibonacciSequence(10);

    // Printing on screen the Fibonacci sequence of size 10 obtained by "getFibonacciSequence()" function one step before.
    console.log(fibonacciSequence);

    // Assigning "sumOfAllElementsInsideFibonacciSequence" variable as the return of "getSumOfAllIn(fibonacciSequence)" function.
    let sumOfAllElementsInsideFibonacciSequence = getSumOfAllIn(fibonacciSequence);

    // Printing on screen the sum of all elements inside the "fibonacciSequence" obtained by "getSumOfAllIn()" function one step before.
    console.log(sumOfAllElementsInsideFibonacciSequence);

    // Returning standard machine-readable success answer.
    return 0;

})();