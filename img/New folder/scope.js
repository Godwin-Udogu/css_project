/*
scope in programming refers to the context in which variables are declared and the rules that
determine how variables are accessible and interact with each other
*/


// GLOBAL SCOPE
var globalvariable = 'I am Monkey .D. Luffy';

function exampleFunction() {
    console.log(globalvariable);  //Accessible within the function
}
exampleFunction()


// LEXICAL SCOPE
function outerfunction() {
    var outervariable = 'I AM USSOP';

    function innerfunction() {
        console.log(outervariable); //ACCESSING OUTERVARIABLE FROM 
        // THE OUTER SCOPE
    }
    innerfunction();
}

outerfunction();


function outerfunction2() {
    var outervariable = "I am Ace luffy's brother";
    if (true) {
        var innervariable = "I am Sabo luffy's brother";
        let innervariable2 = "I am garp luffy's grandpa";
        console.log(outervariable); 
        //accessing the outervariable from the outer scope
        console.log(innervariable); 
        //accessing the innervariable from the current scope
        console.log(innervariable2); 
        //accessing the innervariable2 from the current scope
    
    
    }

    // trying to access innervariable outside the if block will still work
    console.log(innervariable);
    // This will work because it has functional scope,
    //  showing "I am Sabo luffy's brother"
    //  console.log(innervariable2); this will not work,
    // because it has a block scope
}

outerfunction2()

// FUNCTIONAL SCOPE(LOCAL SCOPE)

function exampleFunction() {
    let localvar = 'I am a local variable';
    console.log(localvar); // accessible within the function
}

exampleFunction()


// LOCAL SCOPE(block scope)