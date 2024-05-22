let a = prompt("Enter a: "); 
let b = prompt("Enter b: "); 
let c = prompt("Enter c: "); 
let positive = (-b + Math.sqrt((b*2)-(4*a*c))); 
let negative = (-b - Math.sqrt((b*2)-(4*a*c))); 
let X1 = (positive/(2*a)); 
let X2 = (negative/(2*a)); 
console.log('The roots are', X1 = ${X1}, 'and', X2 = ${X2})