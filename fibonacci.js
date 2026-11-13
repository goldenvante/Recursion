function fibs(n) {
  const result = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }

  return result;
}


function fibsRec(n) {
  function build(remaining, a, b, result) {
    // Caso base: detener la recursión
    if (remaining === 0) {
      return result;
    }

    result.push(a);

    
    return build(remaining - 1, b, a + b, result);
  }

  return build(n, 0, 1, []);
}

console.log("Pruebas de fibs:");

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(5));
console.log(fibs(8));
console.log(fibs(10));

console.log("Pruebas de fibsRec:");

console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(5));
console.log(fibsRec(8));
console.log(fibsRec(10));
