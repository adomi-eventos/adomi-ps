// Somo a e b atribuindo em a,
// depois faço a diferença de a(42) e b(19)
// atribuindo ao b(23), invertendo seu valor com o original de a.
// Atribuo a diferença de a(42) e b(23) ao a(19).
let a = 19;
let b = 23;

a = a + b;
b = a - b;
a = a - b;

console.log(`A: ${a}`)
console.log(`B: ${b}`)