let A = 19;
let B = 23;
const trade1 = (A) => (A = 19 ? (A = 23) : (A = null));
console.log(`A = ${trade1(A)}`);
const trade2 = (B) => (B = 23 ? (B = 19) : (B = null));
console.log(`B = ${trade2(B)}`);
