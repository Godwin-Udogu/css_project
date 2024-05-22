/* string: represents textual data, enclosed in single(' '), double(" ") quotes or (``)backticks (template literals) */

// length returns the numbers of characters in a string
const myString = 'hello, world!'
console.log(myString.length);

// constructor
const myString2 = "Hello, World!"
console.log(myString2.constructor);


// charAt

let str = "hello"
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[1]);

// SUbstring slicing
/* substring(start, end): returns a portion of the string from start to end.
-> slice(start, end): similar to substring, but allows negative indices
-> substr(start, length): returns a substring starting from start with the specified length */

let str1 = "Javascript"
console.log(str1.substring(0, 4));
console.log(str1.substring(-6));
console.log(str1.slice(-6));
console.log(str1.slice(-4));
console.log(str1.substr(4, 6));

// concactenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); //output: 'John Doe' 
let fullNamex = firstName.concat(" ", lastName, ' you');
console.log(fullNamex); //output: 'John Doe you'

let fullName2 = firstName +' '+lastName
console.log(fullName2); //output: 'John Doe'
let fullName3 = firstName + lastName
console.log(fullName3); //output: 'JohnDoe'

let fullName4 = `${firstName} ${lastName}`
console.log(fullName4); //output: 'John Doe'