var courses = [];

for(i = 0; i<5; i++){
courses.push(prompt("course "+ (i+1)));
}

// courses.push(course1);
// courses.push(course2);
// courses.push(course3);
// courses.push(course4);
// courses.push(course5);

alert(courses);

for(j = 0; j < courses.length; j++){
courses.splice(j,1,prompt("course " + (j+1), courses[j]));
}

alert(courses);
