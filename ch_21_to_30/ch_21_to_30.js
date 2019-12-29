var num = parseFloat(prompt("Enter any float value", "3.4"));
var roundOff = Math.ceil(num);
alert(roundOff);
var someText = "Some people have curly brown hairs";
var slicedText = someText.slice(0,roundOff);

var splitSlicedText = slicedText.split("");
var reversedText = "";
for(i = (roundOff-1); i >= 0; i--){
    reversedText += (splitSlicedText[i]);
    alert(reversedText);
}