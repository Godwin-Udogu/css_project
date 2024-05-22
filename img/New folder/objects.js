// object literals
let person = {
    name: "John",
    age: 30,
    isaStudent: false,
    greet: function(){
        console.log("hello, I'm " + this.name + ".");
    },
    eat: function(){
        console.log("hello, I'm " + this.name + " and i am eating.");
    },
    sleep: function(){
        console.log("hello, I'm " + this.name + " and i am sleeping.");
    },
    walk: function(){
        console.log("hello, I'm " + this.name + " and i am walking.");
    },
    nationality: "Nigerian"

}

console.log(person.age)
console.log(person.greet())
console.log(person['age'])
console.log(person['greet()'])// square brackets don't work on object methods 
console.log(person.nationality)
console.log(person.walk())

// constructor functions
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function() {
        console.log("Driving the " + this.year + " " + this.make + " " + this.model + ".");
        return 1
    } 
}

let mycar = new Car("Mercedes", "Benz", 2023);
console.log(mycar)
console.log(mycar.make)
console.log(mycar.model)
console.log(mycar.year)
console.log(mycar['make'])
console.log(mycar['model'])
console.log(mycar['year'])

// Updating objects
mycar['make'] = "Ford"
console.log(mycar['make'])
mycar.make = "Benz"
console.log(mycar['make'])

// let myarray = ['Mazda, Benz, BMW']
// for (let name of myarray) {
//     mycar = name
//     console.log(mycar.make = name);
// }

let myobj = {speed:"140km/h", color:"blue"}
for(let key in myobj) {
    mycar[key] = myobj[key]
    console.log(mycar[key]);
}
// console.log(mycar);

let mydreamcar = ['Benz, Benz, Benz']
for (let name of mydreamcar){
    console.log(mycar.make = name)
}

// updating objects, adding methods and properties
// console.log(mycar.make)
// mycar['engine'] = "V8"
// console.log(mycar)
// mycar.

Object.keys(person)
console.log(Object.keys(person))

Object.values(person)
console.log(Object.values(person))

Object.entries(person)
console.log(Object.entries(person))


const target = { a: 1, b: 2};
const source = { b: 3, c: 4};
Object.assign(target, source);
console.log(target)

console.log(person)
let { name, age } = person;
console.log(name)
console.log(age)
name = "Henry"
console.log(person)

let human = {...person}
console.log('human', human)

let jsonString = JSON.stringify(person);
console.log(typeof (person))
console.log(typeof (jsonString))
console.log(jsonString)