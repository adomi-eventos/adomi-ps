const result = [0, 1];
    for (var i = 2; i <= 8; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    console.log("Série de Fibonacci:",result); 

