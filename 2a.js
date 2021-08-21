let A = 19;
let B = 23;
let C = 0;

const trade = (A, B, C) => {
  C = A;
  A = B;
  B = C;
  console.log(`A = ${A}`);
  console.log(`B = ${B}`);
};
trade(A, B, C);
