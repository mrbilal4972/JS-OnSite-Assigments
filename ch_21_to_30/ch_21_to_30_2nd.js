var fullName = prompt("Enter your Full Name", "bilal Ashraf");
console.log(fullName);

var stdText = fullName.toLowerCase();
console.log(stdText);

var splitStr = stdText.split(" ");
console.log(splitStr)

var capText = "";
for(i = 0; i < splitStr.length; i++){
    splitStr[i] = splitStr[i].replace(splitStr[i].charAt(0),splitStr[i].charAt(0).toUpperCase());
    capText += splitStr[i] + " ";
}
console.log(capText);