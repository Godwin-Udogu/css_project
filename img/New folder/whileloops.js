/*
Loops are construct in programming that allow you to reapetedly execute
a block of code while a certain condition is true
*/

// while(condition) {
//     // condition
// }


let a = 0;

while(a < 5){
    console.log(a)
    a++
}

console.log('new')

let i = 0;
let j = 0;
while(i < 5) {
    console.log(i);
    console.log(j);
    j++;
    if(j >= 30){
        i = 6
    }
}


let randomnumnber;
let b = 0

while (true){
    randomnumber = Math.floor(Math.random() * 1000) + 1;
    b++
    console.log('b = '+b)
    console.log("Generated number:", randomnumber);

    if (randomnumber === 420) {
        console.log("found the magiv number!");
        break;
    }
}

let c = 0;
do {
    console.log(c);
    c++
}
while (false);