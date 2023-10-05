// Function expression
const add = function (a, b) {
    return a + b;
  };
  
  console.log(add(2, 3)); // 5
  
  // Arrow function with multiple parameters
  const multiply = (x, y) => {
    return x * y;
  };
  
  console.log(multiply(4, 5)); // 20
  
  // Arrow function with a single parameter
  const square = x => x * x;
  
  console.log(square(3)); // 9
  
  // Arrow function with implicit return (single expression)
  const greet = name => `Hello, ${name}!`;
  
  console.log(greet("Alice")); // Hello, Alice!
  
  // Using arrow functions with the map method
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  
  console.log(squares); // [1, 4, 9]

  // Function expression
const divide = function () {
    return 2000 / 100;
  };
  
  // Calling the divide function
  const result = divide();
  console.log(result); // Output: 20