
// Implicit (automatic) TYpe conversion (coercion):
// let num = 10;
// let str = "5";
// let val = num + str
// let val2 = num / str
// console.log(num + str)
// console.log(typeof val)
// console.log(num / str)
// console.log(typeof val2)

// let num1 = 10;
// let str1 = 20;
// console.log(num1 + str1)


// Explicit type conversion
let num = 10;
let str = Number("5")
let val = num + str
console.log(num + str)
console.log(typeof val)

let num1 = 10;
let str1 = Number("five");
console.log('str1', str1)
let val1 = num1 + str1
console.log(num1 + str1)
console.log(typeof val1)


let num2 = 10;
let str2 = "5";
let val2 = String(num2) + str2
console.log(val2)
console.log(typeof val2)

// let str3 = Boolean("5");
// let str3 = Boolean("");
// let str3 = false;
// let str3 = true;
// let str3 = Boolean(5);
// let str3 = Boolean(0);
// let str3 = Boolean({});
// let str3 = Boolean([]);
// let str3 = Boolean(NaN);
// let str3 = Boolean(null);
let str3 = Boolean(undefined);

// if({ key: "value" }) {
//     // this block will be executed
//     console.log('true, block executed')
// }
// if({}) {
//     // this block will be executed
//     console.log('true, block executed')
// }
// else{
//     console.log('false, block is not executed')

// }

console.log(str3)
console.log(typeof str3)