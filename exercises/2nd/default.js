/**
 * Exercise description: 
 *
 * Write an algorithm that storage the value "19" inside an "a"
 * variable and the value "23" inside a "b" variable. Next, swi-
 * pe their contents making the value inside "a" switch to "b"
 * and vice-versa. At the end, print the values storaged in each
 * variable.
 * 
 */

// Defining the "Number" class with a value property. 
 class Number {
    constructor(value) {
        this.value = value;
    }
}

/**
 * Swipe "Number" objects values.
 * @param first A "Number" object.
 * @param second A "Number" object.
 */
function swipe(first, second) {

    // Instancing the buffer value.
    let buffer = first.value;

    // Assigning the first object value as the second object value.
    first.value = second.value;

    // Assigning the second object value as the buffer value.
    second.value = buffer;

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

    // Printing the values before swipe.
    console.log(`a: ${a.value} b: ${b.value}`);

    // Swiping the values by using the swipe() function.
    swipe(a, b);

    // Printing the values after swipe.
    console.log(`a: ${a.value} b: ${b.value}`);

    // Returning standard machine-readable success answer.
    return 0;

})();