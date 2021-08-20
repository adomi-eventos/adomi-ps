module.exports = {
  a: function(x) {
    var fib = [0, 1]
    var i = 1
    while(fib.length < x) {
      fib.push( fib[i] + fib[i-1] )
      i++
    }
    return fib
  },
  b1: function(arr) {
    var soma = 0
    arr.forEach( (n) => soma += n )
    return soma
  },
  b2: function(arr, n) {
    if (n <= 0)
      return 0
    return ( Tres.b2(arr, n-1) + arr[n-1] )
  }
}

var Tres = require('./3')
var x = 12

console.log("3a ---")
var Tresa = Tres.a(x)
console.log( "Fibonacci(" + x + "): " + Tresa )

console.log()

console.log("3b-1--")
console.log( Tres.b1(Tresa) )

console.log()

console.log("3b-2--")
console.log( Tres.b2(Tresa, Tresa.length) )
