
// Arithmetic Operators:
/*

+ (Addition)
- (Subtraction)
/ (Division)
% (Modulus - remainder of division)
** (Exponentiation)

*/

let num = 5
let num2 = 16
let sum = num + num2
let sum1 = num % num2
console.log(sum);
console.log(sum1);
console.log(4**3);
console.log(64**(1/2));

// Assignment OPerators:
/*

= (Assignment)
+= (Addition assignment)
-= (Subtraction assignment)
*= (Multiplication assignment)
/= (Division assignment)

*/

let num1 = 5
console.log(num1);
num1 += 6
// num1 = num1 += 6
console.log(num1);

let num3 = 7
console.log(num3);
num3 -= 4
console.log(num3);

let num4 = 12
console.log(num4);
num4 *= 9
console.log(num4);

let num5 = 225
console.log(num5);
num5 /= 15
console.log(num5);

// Comparison OPerators:
/*

== (Equality, coerces types if needed, checks the value)
=== (Strict equality, checks both value and type)
!= (Inequality, coerces types if needed)
!== (Strict inequality, checks both value and type)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)

*/

let num2x = 5
let num2y = '5'
console.log(num2x == num2y);
console.log(num2x === num2y);
console.log(num2x != num2y);
console.log(num2x !== num2y);
console.log(num2x > num2y);
console.log(num2x < num2y);
console.log(num2x >= num2y);
console.log(num2x <= num2y);

let less = 7
let less1 = 14
console.log(less > less1);
console.log(less < less1);
console.log(less1 > 52);
console.log(less >= 4 );
console.log(less <= 5);

// LOGICAL OPERATORS: 
/* 

&& (logical AND)
 || (logical OR)
 ! (logical NOT)
 
 */

let isTrue = true;
let isFalse = false;

let num2x1 = 5
let num2y1 = '5'
console.log(num2x1 !== num2y1);

console.log(isTrue && isFalse);
console.log(num2x1 === num2y1 && num2x1 == num2y1 && num2x1 !== num2y1);

console.log(isTrue || isFalse);
console.log(num2x1 === num2y1 || num2x1 == num2y1);
 
console.log(!num2x1);
console.log(!isTrue);
console.log(!isFalse);
 
//  Unary OPerators :
/*
+(unary plus)
-(unary minus)
++(increment)
--(decrement)
*/
// let num2xa = 5
let num2xa = '5'
// let num2xa = 'A5'
console.log(+num2xa);
console.log(-num2xa);
console.log(++num2xa);
console.log(--num2xa);
console.log(num2xa++);
console.log(num2xa--);
console.log(num2xa);

// tenary operator:
let a = 8
let b = 5
let result = (a > b) ? "a is greater" : "b is greater";
console.log(result)

const number = 7;
const result2 = (number % 2 === 0) ? 'even' : 'odd';
console.log(`${number} is ${result2}`);

let salary = 7;
let newsalary = (salary > 50) ? (salary + salary*(10/100)) : (salary +
salary*(20/100));
console.log(`old salary was ${salary}, hence new salary is ${newsalary}`);

let usercount;
let defaultcount = 10;
usercount = 20;
// let totalcount = usercount ?? defaultcount;
let totalcount = usercount

console.log('usercount', usercount)
console.log('totalcount', totalcount)

// BITWISE OPERATORS:
/*

& (Bitwise AND)
| (Bitwise OR)
^ (Bitwise XOR)
~ (Bitwise NOT)
<< (Left shift)
>> (Right shift)

*/

let resultx1 = 5 & 3; //0101 & 0001 (decimal 1)
// console.log(resultx1)

// let resultx2 = 5 | 3; // 0101 | 0111 (decimal 7)
// console.log(resultx2)

// let num1a = 5; // Binary: 0101
// let num2a = 3; // Binary: 0011

// let resultx3 = num1a ^ num2a; // Binary: 0110
// console.log(resultx3)

// var resultx4 = 5 << 2;
// console.log(resultx4)

// var resultx5 = 20 >> 2;
// console.log(resultx5)