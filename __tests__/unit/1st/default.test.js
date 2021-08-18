const isOddOrEven = require('../../../exercises/1st/default');

test("Should returns if a number is odd or even", () => {
    expect(isOddOrEven(1)).toBe("odd");
    expect(isOddOrEven(2)).toBe("even");
    expect(isOddOrEven(3)).toBe("odd");
    expect(isOddOrEven(4)).toBe("even");
    expect(isOddOrEven(5)).toBe("odd");
    expect(isOddOrEven(6)).toBe("even");
    expect(isOddOrEven(7)).toBe("odd");
    expect(isOddOrEven(8)).toBe("even");
    expect(isOddOrEven(9)).toBe("odd");
    expect(isOddOrEven(10)).toBe("even");
})