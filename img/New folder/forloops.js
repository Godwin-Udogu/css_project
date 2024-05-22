for (let i = 0; i < 5; i++){
    console.log(i); 
}

for (let i = 5; i <= 5 && i > 0; i--){
    for ( let j = 0; j <=5; j++){
        for(let k = 0; k <= 5; k++){
            console.log(i, j, k);
        }
    }
}

for (let i = 0; i < 5; i++){
    if(i === 2){
        continue; //skip the rest of the code for i equals 2
    }
    console.log(i);
}



for (let i = 0; i < 5; i++) {
    if(i === 3){
        break; // exit the loop when i equals 3
    }
    console.log(i);
}



// for .... in loop:
/* 
Iterates over properties of an object.
*/
const myobject = { a: 1, b: 2, c: 3,name:"FURO", car: "BENZ"
};

console.log(myobject['name'])
console.log(myobject.name)

for (let key in  myobject) {
    console.log(key, myobject[key]);
}


const myobject1 = { car: "BENZ", anime: "One Piece", food: "Rice",
occupation: "technologist", babe: "mary",};

console.log(myobject1.babe);

for (let key in myobject1) {
    console.log(`${key} : ${myobject1[key]}`)
}



// for... of loop:
/*
the for...of loop is used to iterate over values of an iterable 
object (like arrays, strings, etc.).
*/

const myArray = [1, 2, 3];

for (let value of myArray) {
    console.log(value);
}


let myArray2 = "PROPERTIES"
for (let val of myArray2){
    console.log(val)
}

const mystring = [1, 2, 3];
mystring.forEach(function(value){
    console.log('forEach', value);
});


mystring.map(function(value){
    console.log('map', value);
});


// exercise

const one = "FURO"
for (let val of one){
    console.log(val)
}



const one1 = [1, 2, 3, 4];
for(let value of one1){
    console.log(value)
}

const one2 = [1, 2, 3, 4];
one2.forEach(function(value){
    console.log('forEach', value);
});

one2.map(function(value){
    console.log('map', value);
});


let myname = "properties"

for ( let i = 0; i < myname.length-1; i++){
    // console.log(i);
    console.log(myname[i]);
}