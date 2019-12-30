var rightNow = new Date();
var dateOfBirth = new Date();
var name = prompt("Enter your name", "Bilal Ashraf");
dateOfBirth.setDate(Number(prompt("Enter your Birth Day","2")));
dateOfBirth.setMonth((Number(prompt("Enter your Birth Month","7"))) - 1);
dateOfBirth.setFullYear(Number(prompt("Enter your Birth Year","1994")));
dateOfBirth.setHours(Number(prompt("Enter your Birth Hour","19")));
dateOfBirth.setMinutes(Number(prompt("Enter your Birth Minute","34")));
dateOfBirth.setSeconds(Number(prompt("Enter your Birth Second","51")));

///////////////////////////////////////////////////

    // Messageconsole.log
    if(dateOfBirth.getHours() >= 0 && dateOfBirth.getHours() <= 5){
        console.log("Hello " + name + ", Good night");
        }
        else if(dateOfBirth.getHours() >= 6 && dateOfBirth.getHours() <= 11){
        console.log("Hello " + name + ", Good Morning");
        }
        else if(dateOfBirth.getHours() >= 12 && dateOfBirth.getHours() <= 17){
        alert("Hello " + name + ", Good Afternon");
        }
        else if(dateOfBirth.getHours() >= 18 && dateOfBirth.getHours() <= 23){
        console.log("Hello " + name +  ", Good Evening");
        }
        console.log(dateOfBirth);

////////////////////////////////////////////////////

        // How old are you?

var yearOld = rightNow.getFullYear() - dateOfBirth.getFullYear();
var monthOld = rightNow.getMonth() - dateOfBirth.getMonth();
var dayOld = rightNow.getDate() - dateOfBirth.getDate();
var hourOld = rightNow.getHours() - dateOfBirth.getHours();
var mintOld = rightNow.getMinutes() - dateOfBirth.getMinutes();
var secOld = rightNow.getSeconds() - dateOfBirth.getSeconds();
if(monthOld < 0){
    monthOld += 12;
    yearOld -= 1;
}
if(dayOld < 0){
    dayOld +=31
    monthOld -=1;
}
// console.log("Age " +yearOld);
// console.log(monthOld);
// console.log(dayOld);

if(hourOld < 0){
    hourOld += 23;
    dayOld -= 1;
} 
if(mintOld < 0){
    mintOld += 59;
    hourOld -= 1;
}
if(secOld < 0){
    secOld += 59;
    mintOld -= 1;
}
// console.log(hourOld);
// console.log(mintOld);
// console.log(secOld);

console.log("You are "+yearOld+" years "+monthOld+" Month "+dayOld+" Day "+hourOld+" Hours "+mintOld+" Minutes "+secOld+" Seconds old");

///////////////////////////////////////////////////////////

    // Age in Days
var ageMilliSec = rightNow.getTime() - dateOfBirth.getTime();
var ageDays = Math.floor(ageMilliSec / (1000*60*60*24));
console.log("Your age in Days "+ageDays);

//////////////////////////////////////////////////////

    // Next BirthDay

var nxtBDay = dateOfBirth;
nxtBDay.setFullYear(new Date().getFullYear() + 1);
console.log(nxtBDay);

//////////////////////////////////////////////////////////

    // Remaining Days till Next Birthday

var remMilliSec = nxtBDay.getTime() - rightNow.getTime();
var remDays = Math.floor(remMilliSec / (1000*60*60*24));

var remHour = nxtBDay.getHours() - rightNow.getHours();
var remMint = nxtBDay.getMinutes() - rightNow.getMinutes();
var remSec = nxtBDay.getSeconds() - rightNow.getSeconds();

if(remMint < 0){
    remMint += 59;
    remHour -= 1;
}
if(remSec < 0){
    remSec   += 59;
    remMint -= 1;
}

if(nxtBDay === rightNow){
    console.log("Happy Birthday Bilal. Today is Your "+yearOld+ "th Birthday");
}
else{
    console.log("How much time left in your next birthday? " 
    +remDays+" Day "+remHour+" Hours "+remMint+" Minutes "+remSec+" Seconds");
}

/////////////////////////////////////////////////

