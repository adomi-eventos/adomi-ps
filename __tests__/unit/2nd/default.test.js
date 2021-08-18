const { swap } = require('../../../exercises/2nd/default');
const { Number } = require('../../../exercises/2nd/default');

test("Should swap numbers variables values", () => {

    let a = new Number(19);
    let b = new Number(23);
    
    swap(a, b);

    expect(a.value).toBe(23);
    expect(b.value).toBe(19);

})