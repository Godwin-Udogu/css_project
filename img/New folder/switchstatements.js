let day = prompt("enter day:");
switch(day) {
    case "sunday":
        console.log("it's the start of the week");
        break;
    case "wednesday":
        console.log("it's the fourth of the week");
        break;
    case "Tuesday":
        console.log("it's the third of the week");
        break;
    default:
        console.log("other day")
}

////////
function calculate(num1, operator, num2){
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '**':
            return num1 ** num2;
        case '/':
            if (num2 !== 0){
                return num1 / num2;
            } else {
                return "Error: cannot divide by zero";
            }
        default:
            return "invalid operator. please use +, -, *, **, or /.";
    }
}

const num1 = parseFloat(prompt("Enter the first number:"));
const operator = prompt("Enter the operator (+, -, *,**, /):");
const num2 = parseFloat(prompt("Enter the second number:"));

const result = calculate(num1, operator, num2);

console.log(`Result: ${result}`);
alert(`Result: ${result}`)