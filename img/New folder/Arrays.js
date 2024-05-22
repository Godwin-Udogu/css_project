/*
Arrays in Javascript are a type of objects that allows you to store and manipulate collection of elements

you can create an array using the array literal notation []
*/

// using the array constructor
const anotherArray = new Array(1, 2, 3, 4, 5);

// javascript
// using array literal notation
const myArray0 = [1, 2, 3, 4, 5];
console.log('value',myArray0[2]);
console.log('value',myArray0[myArray0.length-1]);
console.log('length',myArray0.length);
console.log('length',myArray0.constructor);

/*
slice(startIndex, endIndex) - returns a shallow copy of part of an array.
*/
// syntax
// MyArray.slice(startIndex, (endIndex+1))
let original = [1, 2, 3, 4, 5]
// let copy = original.slice(1, 4);
let copy = original.slice(1, 4+1);
console.log(copy);
console.log(original[3]); // 4
// console.log(myArray0.slice(1, 3)); // outputs [2, 3]

/*
concat (array1, array2, ....): combines two or more arrays.
*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let combined = arr1.concat(arr2, arr3, 10, 11, 'how');
console.log(combined);


/*
forEach(callback): Executes a provided function once for each array element
*/
let numbers = [1, 2, 3]
numbers.forEach(function(number) {
    number++
    console.log(number);
})

let strArray = [ "How", "are", "you?" ]
strArray.forEach(function(str){
    console.log(str);
})

/*
map(callback):creates a new arrray with the results of calling a provided function on every element in the array
*/
let numbers1 = [1, 2, 3]
let squared = numbers1.map(function(number) {
    return number * number
})
// squared is now [1, 4, 9]
console.log(squared);


/*
filter(Callback): creates a new array with all elements that pass the test implemented by the provided function.
*/

let number2 = [1, 2, 3, 4, 5]
let evenNumbers = number2.filter(function(number) {
    return number % 2 === 0
})
// evenNumbers is now [2,4]
console.log('evennumbers',evenNumbers);


/*
every(Callback): checks if all elements in the array pas the test implemented by the provided function.
some(callback): checks if at least one element in the array passes the test implemented by the provided function.
*/
let number3 = [2, 4, 6, 8, 10]
let allEven = number3.every(function(number) {
    return number % 2 === 0
})//true
console.log(allEven);

let allOdd = number3.some(function(number) {
    return number % 2 !== 0
})//false
console.log(allOdd);

// sorting and reversing
/*
array.sort(): sort the elements of an array.
array.reverse(): reverse the order of the elelements in an array.
*/
const myArray = [3, 1, 4, 1, 5, 9];

myArray.sort() //[1, 1, 3, 4, 5, 9]
myArray.reverse(); //[9, 5, 1, 1, 4, 3]
console.log("Sorted: ", myArray);
console.log( "Reversed:", myArray );


/*
indexOf() - searches for the first occurrence of a specified value and returns its index. If not found it returns -1.
indexOf() - method returns the first index at which a given element can be found in the array, or -1 if it is not present.
push() - adds one or more elements to the end of an array and returns the new length of the array.
pop() - removes the last element from an array and returns that element. If the array is empty, it returns undefined.
*/
// let myArray1 = [1, 2, 3];
// myArray1.push(4,  5, 6);
// console.log(myArray1); // outputs [1, 2, 3, 4, 5, 6]

// let myArray2 = [1, 2, 3];
// myArray2.pop(3);
// console.log(myArray2); // outputs [1, 2]

// let arr = new Array(1, 2, 3); // [1, 2, 3]
// console.log(arr)

// /*
// You can also use the array literal notation which is more commonly used:
// */

// let arrLiteral = [4,5,6]; //[4, 5, 6]
// console.log(arrLiteral)

