const getFibonacciSequence = require("../../../exercises/3rd/default");

test("Should return the Fibonacci Sequence with size 'x'", () => {

    let firsTest = getFibonacciSequence(1);
    let secondTest = getFibonacciSequence(2);
    let thirdTest = getFibonacciSequence(3);
    let fourthTest = getFibonacciSequence(4);
    let fifthTest = getFibonacciSequence(5);
    let sixthText = getFibonacciSequence(10);

    expect(firsTest).toStrictEqual(([1]));
    expect(secondTest).toStrictEqual(([1,1]));
    expect(thirdTest).toStrictEqual(([1,1,2]));
    expect(fourthTest).toStrictEqual(([1,1,2,3]));
    expect(fifthTest).toStrictEqual(([1,1,2,3,5]));
    expect(sixthText).toStrictEqual(([1,1,2,3,5,8,13,21,34,55]));

})