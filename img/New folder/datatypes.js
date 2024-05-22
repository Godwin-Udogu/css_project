
// let dynamicVariable = 'i can hold a string';
// console.log(dynamicVariable)
// dynamicVariable = 67;
// console.log(dynamicVariable)

// primitive data types

// String:
// Represents a textual data enclosed in single(''), double (" ") quotes or (``) backticks (Templates)
// let myString1 = 'Hello World';
// let myString2 = "Hello World";
// let myString3 = `Hello World`;
// alert('User\'s "" first-Name: ' + firstName + ', User last-Name: ' + lastName );
// alert("User first-Name: " + firstName + ", User last-Name: " + lastName );
// alert(`User's "" first-Name:${firstName},  User last-Name: ${lastName}`);
// console.log(typeof myString1);

// Number:
// represents both integer and floating point numbers

// integer iterals
// are whole numbers without decimal points.
let myNumber = 42;
console.log(typeof myNumber);

// floating-point iterals
// include decimal points allowing for fractional numbers
let floatingPointnumber = 3.34;
console.log(typeof floatingPointnumber);

// scientificnotation
// for expressing very large or very small numbers
let scientificNotation = 3.3e4;
console.log(typeof scientificNotation);

// infinity
let positiveInfinity = Infinity;
console.log(typeof positiveInfinity);
let negativeInfinity = -Infinity;
console.log(typeof negativeInfinity);


// hexadecimal
// is a base-16 numeral system that uses the digits 0-9
// and the letters A-F to represent values

// you can represent a hexadecimal number directly 
// in your code using 0x prefix
// 0-9 and A_F (or a-f)

let hexNumber = 0x1f;
console.log(typeof hexNumber);

// NaN (not a number);
// a special value representing the result of an invalid
//  or undefined mathematical operation

let notAnumber = NaN;
console.log(typeof notAnumber);

// boolean:
// represents a logical entity and can have two values: true and false.
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);

// Null
// represents the intional absence of any object value.
let myNull = null;
console.log(typeof myNull, 'here');

// undefined represents a variable that has been declared but not assigned a value.
let myUndefined;
console.log(typeof myUndefined);

// symbol;
// introduced in ECMAScript 6, symbols are unique and immutable
// primitive values. they are often used as keys for object properties
let mySymbol = Symbol;
console.log(mySymbol);
let mySymbol11 = Symbol("unique symbol");
console.log(mySymbol11);

// special data types:
// object data type:
// object: a complex data type used to store collections of key-value pairs.
let myObject = {
    key1:"Value1",
    Key2: 42,
    key3: true
};
console.log(myObject);

// function
// function are first class citizens, meaning they can be assigned to variables,
// passed as arguments, and returned from other functions.
function myFunction() {
    // function logic
}
console.log(typeof myFunction);

// Array:
// a specialized type of object that represents an ordered collection of values. Arrays are indexed starting from 0.
let myAray = [1, 'hi', 3, 4];
console.log(typeof myAray);

// date:
// represents dates and times in javascript.
let currentDate = new Date();
console.log((currentDate));
console.log(typeof myAray);

// RegExp:
// Represents regular expressions for pattern matching.
let pattern = /[a-zA-Z]+/;
console.log(typeof pattern);