/*
funcitons in javascript are block of reusable codes that can be defined and invoked (called) at various points in a program.

in javascript, functions are first class objects, which mean they can be treated like any other object and have properties and methods associated with them

*/

// Syntax
// function declaratrion
function add(a, b) {
    return a + b;
}

console.log("add: ", add(2, 3)); // Outputs "

function name(params1, params2) {
    // function body: code to be executed
    // you can use parameters and define local variables here
    // optionally you can return a value using a return keyword
}

let functioname = function name(params, params2) {
    // function body: code to be executed
    // you can use parameters and define local variables here
    // optionally you can return a value using a return keyword
  
}

// function expression
let functioname2 = (params, params2) => {
    // function body: code to be executed
    // you can use parameters and define local variables here
    // optionally you can return a value using a return keyword
   
}
// function object properties:
// name:returns the name of the function
console.log(functioname2.name); // Outputs "functioname2"

// common function methods;
// call(thisArg, arg1, arg2): calls a function with a given value and arguments proved individually

function greet(name) {
    console.log( `Hello ${name}` );

}
greet('frank')

greet.call(null, "John")

function greet2(name) {
    console.log(`Hi ${name}! ${"How are you today?"}`);
}

greet2('Paulofph')

// addition division multiplication
function Addition(d, c) {
    console.log(d + c);
}

Addition(5,6)

let division = function divide(e, f) {
    console.log(e / f);
}

division(9, 3)

let Multiplication = (int1, int2, int3) => {
    console.log( int1 * int2 * int3);
}

Multiplication(4, 7 ,8 )

let Multiplication1 = (int4, int5, int6) => {
    return( int4 * int5 * int6);
}

let result = Multiplication1(50, 5, 4)
console.log(Multiplication1(50, 5, 4));



// use functions to create a simple calculator

// Function to add two numbers
function add(x, y) {
    return x + y;
  }
  
  // Function to subtract two numbers
  function subtract(x, y) {
    return x - y;
  }
  
  // Function to multiply two numbers
  function multiply(x, y) {
    return x * y;
  }

  //  funtion to exponent
  function exponent(x, y) {
    return x ** y;
  }
  
  // Function to divide two numbers
  function divide(x, y) {
    if (y === 0) {
      throw new Error("Cannot divide by zero");
    }
    return x / y;
  }
  
  // Function to get user input and perform calculation
  function calculate() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter the operator (+, -, *, **, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));
  
    let result;
  
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '**':
        result = exponent (num1, num2);
        break
      case '/':
        result = divide(num1, num2);
        break;
      default:
        alert("Invalid operator. Please use +, -, *, **, /.");
        return;
    }
  
    alert(`The result is ${result}`);
  }
  
  // Call the calculate function
  calculate();