var num1 = Number(prompt("Enter any number", 7));
var num2 = Number(prompt("Enter any number", 3));
var opr = prompt("Enter Arithmatic operation you want to perform for e.g +,-,*,/,%");

switch(opr){

    case "+":
        alert(num1 + " " +opr+ " " +num2 + " = " + (num1 + num2));
        break;
    case "-":
        alert(num1 + " " +opr+ " " +num2 + " = " + (num1 - num2));
        break;
    case "*":
        alert(num1 + " " +opr+ " " +num2 + " = " + (num1 * num2));
        break;
    case "/":
        alert(num1 + " " +opr+ " " +num2 + " = " + (num1 / num2));
        break;
    case "%":
        alert(num1 + " " +opr+ " " +num2 + " = " + (num1 % num2));
        break;
    default:
        alert("Invalid Operator Entered");
}


