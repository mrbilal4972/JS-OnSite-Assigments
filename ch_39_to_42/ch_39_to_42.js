var course = [];
var totMarksObt = 0;
var totalMarks = 500;
for(var i = 0; i<5; i++){
    course.push(Number(prompt("Enter marks Obtained of course" + (i+1), "70")));
    totMarksObt += course[i];
}

var percentage = totMarksObt * 100/totalMarks;

switch(true){
    case  (percentage>=0 && percentage < 30):
        alert("Marks Obt. " +totMarksObt +"\n"
               + "Max Marks " +totalMarks+ "\n"
               + "Percentage " +percentage+"%"+ "\n"
               + "Grade 'F'" );
               break;
    case  (percentage>=30 && percentage < 45):
    alert("Marks Obt. " +totMarksObt +"\n"
           + "Max Marks " +totalMarks+ "\n"
           + "Percentage " +percentage+"%"+ "\n"
           + "Grade 'D'" );
           break;
    case  (percentage>=45 && percentage < 61):
    alert("Marks Obt. " +totMarksObt +"\n"
           + "Max Marks " +totalMarks+ "\n"
           + "Percentage " +percentage+"%"+ "\n"
           + "Grade 'C'" );
           break;
    case  (percentage>=61 && percentage < 75):
    alert("Marks Obt. " +totMarksObt +"\n"
           + "Max Marks " +totalMarks+ "\n"
           + "Percentage " +percentage+"%"+ "\n"
           + "Grade 'B'" ); 
           break;
    case  (percentage>=75 && percentage <= 100):
    alert("Marks Obt. " +totMarksObt +"\n"
           + "Max Marks " +totalMarks+ "\n"
           + "Percentage " +percentage+"%"+ "\n"
           + "Grade 'A'" );
           break;
    default:
        alert("Invalid Percentage Calculated");
        break;

}

