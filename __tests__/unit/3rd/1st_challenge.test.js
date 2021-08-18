const getSumOfAllIn = require("../../../exercises/3rd/1st_challenge");

test("Should return the sum of all array elements", () => {

    expect(getSumOfAllIn([1])).toBe(1);
    expect(getSumOfAllIn([5,1])).toBe(6);
    expect(getSumOfAllIn([4,7,9])).toBe(20);
    expect(getSumOfAllIn([5,0,-2])).toBe(3);
    expect(getSumOfAllIn([8,9,-10])).toBe(7);

})