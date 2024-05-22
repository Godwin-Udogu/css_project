// using var for constants
var name = "Luffy";
console.log(name)
name = 'Zoro';
console.log(name)

//using let
let myvariable = 'Nami';
 console.log(myvariable)
 myvariable = 'Sanji';
 console.log(myvariable)
 
 
//  using const for constants
const PI = 3.14
const g = 10
console.log(g)
// g = 9.8
// console.log(g)


// FUNCTION SCOPE
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x);
}
example()

// function example2() {
//     if (true) {
//         let x = 10;
//     }
//     console.log(x);
// }
// example2()

// function example3() {
//     if (true) {
//         const x = 10;
//     }
//     console.log(x);
// }
// example3()



// let dynamicvariable = 'I am the JOYBOY(NIKA)';
// console.log(dynamicvariable)
// dynamicvariable = 67;
// console.log(dynamicvariable)



