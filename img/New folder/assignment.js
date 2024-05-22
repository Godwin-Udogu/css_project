 function calculate(num1, operator, num2){
    if(operator === '+'){
        return num1 + num2;
    } else if(operator ==='-'){
        return num1 - num2;
    } else if(operator ==='*'){
        return num1 * num2;
    } else if(operator ==='**'){
        return num1 ** num2;
    } else if(operator ==='/'){
        if(num2 !== 0){
            return num1 / num2
        } else{
            return "error"
        }
        
    } else {
        return"invalid operator"
    }     
}

const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter the operator (+, -, *,**, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

const result = calculate(num1, operator, num2);

console.log(`Result: ${result}`);
alert(`Result: ${result}`)