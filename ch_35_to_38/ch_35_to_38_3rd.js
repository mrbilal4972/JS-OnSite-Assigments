var value = multiply(4,3,6);
console.log("Value "+value);
console.log("This is called function inside a function");


function add(a,b){
    var z = a + b;
    return z;
}
function multiply(a,b,c){
    var z = a * add(b,c);
    return z;
}