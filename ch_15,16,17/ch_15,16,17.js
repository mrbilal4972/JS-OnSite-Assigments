var courses = [];
var course1 = prompt("course 1", "Computer");
var course2 = prompt("course 2", "English");
var course3 = prompt("course 3", "Urdu");
var course4 = prompt("course 4", "Physics");
var course5 = prompt("course 5", "Maths");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);

alert(courses);

course1 = prompt("course 1", courses[0]);
courses.splice(0,1,course1);
course2 = prompt("course 2", courses[1]);
courses.splice(1,1,course2);
course3 = prompt("course 3", courses[2]);
courses.splice(2,1,course3);
course4 = prompt("course 4", courses[3]);
courses.splice(3,1,course4);
course5 = prompt("course 5", courses[4]);
courses.splice(4,1,course5);

alert(courses);
