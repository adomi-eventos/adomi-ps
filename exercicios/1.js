module.exports = {
  a: function(entrada) {
    var pares = []
    var impares = []
    entrada.forEach(
      (n) => {
        (n%2 == 0) ? pares.push(n) : impares.push(n)
      }
    )
    console.log("pares: " + pares)
    console.log("impares: " + impares)
  },

  b: function(entrada) {
    // imprime cada número em uma linha
    ///não uma solução muito organizada
    entrada.forEach( (n) => console.log( (n%2 == 0) ? ("par: " + n) : ("impar: " + n) ) )
  }
}

var Um = require('./1')

console.log("1a ---")
Um.a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

console.log()

console.log("1b ---")
Um.b([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
