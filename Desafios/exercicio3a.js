// Início o array de fibonnaci(fiboArray) com 0,
// depois adiciono os valor atual e o seguinte,
// caso o atual for menor que o valor de parada adiciono os 2
// senão adiciono somente o atual se ele for igual o
// valor de parada, senão não adiciono nada.
function fibonacci(stop) {
  let seguinte = 0;
  let atual = 1;
  let fiboArray = [seguinte];
  while (atual <= stop) {
    atual += seguinte;
    seguinte += atual;
    if (seguinte < stop || atual == 1) {
      fiboArray.push(atual, seguinte);
    } else if (atual <= stop) {
      fiboArray.push(atual);
    }
  }

  console.log(`valores de fibonacci até ${stop}: ${fiboArray}`);
}

fibonacci(0);
fibonacci(1);
fibonacci(13);
fibonacci(29);
fibonacci(100);
fibonacci(150);
fibonacci(342);
fibonacci(1321);






