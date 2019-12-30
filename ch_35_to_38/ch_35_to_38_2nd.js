var anyNum = Number(prompt("Enter any number for which you want a Factorial", "5"));

var valueOfFactorial = Factorial(anyNum);
console.log("Factorial of " +anyNum+ " is " +valueOfFactorial);



function Factorial(num){
    var ans = 1;
    for(i = num; i>0; i--){
        ans *=  i;
    }
    return ans;
}