var courses = [];

courses.push(prompt("course 1", "Computer"));
courses.push(prompt("course 2", "English"));
courses.push(prompt("course 3", "Urdu"));
courses.push(prompt("course 4", "Physics"));
courses.push(prompt("course 5", "Maths"));

alert(courses);

courses.splice(0,1,prompt("course 1", courses[0]));
courses.splice(1,1,prompt("course 2", courses[1]));
courses.splice(2,1,prompt("course 3", courses[2]));
courses.splice(3,1,prompt("course 4", courses[3]));
courses.splice(4,1,prompt("course 5", courses[4]));

alert(courses);
