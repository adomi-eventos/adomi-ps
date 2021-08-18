/**
 * Exercise description: 
 *
 * Write an algorithm that storage the value "19" inside an "a"
 * variable and the value "23" inside a "b" variable. Next, swi-
 * pe their contents making the value inside "a" switch to "b"
 * and vice-versa without use a third variable. At the end, pri-
 * nt the values storaged in each variable.
 *  
 */

// Defining the "Number" class with a value property. 
class Number {
    constructor(value) {
        this.value = value;
    }
}

/**
 * Swap "Number" objects values.
 * @param first A "Number" object.
 * @param second A "Number" object.
 */
function swap(first, second) {

    // Assigning the first object value as the first object value plus second object value.
    first.value += second.value;

    // Assigning the second object value as the first object value minus second object value.
    second.value = first.value - second.value;

    // Assigning the first object value as the first object value minus second object value.
    first.value -= second.value;

    // Returning void.
    return;
}

/**
 * Main function of the exercise (self-invoked).
 */
 (function main() {
    
    // Instancing the "a" variable as a "Number" object with the "19" value.
    let a = new Number(19);

    // Instancing the "b" variable as a "Number" object with the "23" value.
    let b = new Number(23);

    // Printing the values before swap.
    console.log(`a: ${a.value} b: ${b.value}`);

    // Swiping the values by using the swap() function.
    swap(a, b);

    // Printing the values after swap.
    console.log(`a: ${a.value} b: ${b.value}`);

    // Returning standard machine-readable success answer.
    return 0;

})();

/**
 * Exporting the "swap()" function to run jest unitary tests.
 */
 module.exports = { Number, swap };