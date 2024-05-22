// IF STATEMENTS
/*
Conditional branching in programming refers to the ability to execute different code blocks based on certain conditions.
*/

/*
The if statement allows you to execute a block of code if a specified condition is true.
*/

if( '1st condition(s)'){
    // executable codes
    console.log('1st condition(s)')
}
else if('2nd condition(s)'){
    // executable codes
    console.log('2nd condition(s)')
}
else if('3rd condition(s)'){
    // executable codes
    console.log('3rd condition(s)')
}
else{
    // executable codes
    console.log('default condition(s)')
}

let pen = prompt("enter pen color:")
if(pen === 'blue'){
    console.log('blue pen')
}
else if(pen === 'red'){
    console.log('red pen')
}
else if(pen === 'black'){
    console.log('black pen')
}
else{
    console.log('other color pen')
}

let newsalary = 0;

let Name = prompt('enter name: ')
let salary = Number(prompt('enter salary: '))

if( salary >= 70){
    newsalary = salary + salary*(25/100)
}
else if(salary >= 30){

    if( salary >= 45){
        newsalary = salary + salary*(20/100)
    }
    else{
        newsalary = salary + salary*(15/100)
    }
}
else{
    newsalary = salary + salary*(10/100)
}

console.log(`${Name}'s old salary was ${salary},hence new salary is ${newsalary}`);