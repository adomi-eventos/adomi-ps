module.exports = {
  a: function(A, B) {
    var temp = A
    A = B
    B = temp
    console.log(A, B)
  },
  b: function(A, B) {
    [A, B] = [B, A]
    console.log(A, B)
  }
}

var Dois = require('./2')

console.log("2a ---")
Dois.a(19, 23)

console.log()

console.log("2b ---")
Dois.b(19, 23)
