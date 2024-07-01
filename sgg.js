function calculateGrade() {
    let marks = prompt("Enter the students score(between 0 and 100):")
    //convert marks from sting to number
    marks = parseFloat(marks);
    
    //validate input to ensure it is a number between 0 and 100
    if (isNam(marks) || marks < 0 || marks > 100) {
        alert("invalid input! Please enter a number between 0 and 100");
        return;
    }

    //Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A'
    } else if (marks >= 60) {
        grade = 'B'
    } else if (marks >= 50) {
        grade = 'C'
    } else if (marks >= 40) {
        grade = 'D'
    } else {
        grade = 'E'
    }
    //output the grade
    alert(`student's grade is: ${grade}`)
}