number1=Number(prompt("Please enter first number:"));
number2=Number(prompt("Please enter second number:"));
operation=prompt("Please enter a mathematical operation (+,-,*,/):");
if(operation==="+"){
    result=number1+number2;
} else if(operation==="-"){
    result=number1-number2;
} else if(operation==="*"){
    result=number1*number2;
} else {
    result=number1/number2;
}
console.log("The output is:",result);