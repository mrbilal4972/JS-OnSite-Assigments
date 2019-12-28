var course1 = Number(prompt("Enter marks obtained in course1","60"));
var course2 = Number(prompt("Enter marks obtained in course2","60"));
var course3 = Number(prompt("Enter marks obtained in course3","60"));
var course4 = Number(prompt("Enter marks obtained in course4","60"));
var course5 = Number(prompt("Enter marks obtained in course5","60"));

var totalMarks = 500;
var sumOfObtMarks = course1 + course2 + course3 + course4 + course5;

var percentage = sumOfObtMarks * 100 / totalMarks;

alert("Course1 = " +course1+ "\n"
    +"Course2 = " +course2+ "\n"
    +"Course3 = " +course3+ "\n"
    +"Course4 = " +course4+ "\n"
    +"Course5 = " +course5+ "\n"
    +"Total Marks Obtained = " +sumOfObtMarks+ "\n"
    +"Total Marks = " +totalMarks+ "\n"
    +"\n" + "Percentage = " +percentage+ "%");