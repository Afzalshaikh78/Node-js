let num1 = parseFloat(process.argv[2]);
let num2 = parseFloat(process.argv[3]);
let result;
const operator = process.argv[3];

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;  
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 !== 0) {
      result = num1 / num2;
      break;
    }
    else {
      throw new Error("Cannot divide by zero (0)");
    }
  default:
    result = "Invalid operator";
    
}

console.log('result:', result);