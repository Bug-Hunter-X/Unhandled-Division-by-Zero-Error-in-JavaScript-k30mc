function foo(a, b) {
  if (b === 0) {
    return Infinity; // Or throw an error: throw new Error('Division by zero');
    // Or return a default value: return 0;
  }
  return a / b; 
}

console.log(foo(10, 0)); // Returns Infinity (or throws an error or returns 0, depending on the chosen method) 
console.log(foo(10, 2)); // Returns 5