/*
the rest parameter, intorduced in ECMAScript 2015 (ES6), its represented by three (...) dots. it allows you collect the remaining argument of a function inot a single array parameter. 

the rest operator(...) is used in two different contexts in javascript: as a spread operator and as a rest parameter. it plays a different role depending on where it is used*/ 
//it is either the last or the only parameter

// Rest parameter:
// the rest parameter must be the last parameter in the function's parameter list.

function myFunction(arg1, arg2, ...restOfArgs) {
    // function body
    console.log(arg1);
    console.log(arg2);
    console.log(restOfArgs);
}

myFunction('king', 'skill', 100, 30, 'you', 'me', 'school')

function myFunction2(name, age, ...others){
    // function body
    console.log(name);
    console.log(age);
    console.log(others);
    // console.log('value',others[2]);
}
myFunction2('king', 100, 30, 'you', 'me', 'school')

function myFunction3(...other){
    // function body
    console.log(other);
}

myFunction2('king', 100, 30, 'you', 'me', 'school')

// spread operator
// it is often used to make copies of arrays or combine arrays.

// const newArray = {...existingarray};
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const combinedArray = [...array1,...array2]
console.log(combinedArray);
const combinedArray1 = [...array1, '30', ...array2, 27, 'how']

const myObj1 = {a: 1, b: 2, c: 3}
const myObj2 = {x: 1, y: 2, z: 5}
const newObj = {...myObj1, ...myObj2}
console.log(newObj);
const newObj2 = {...myObj1, ...myObj2, c: 9, d: 8 }
console.log(newObj2);