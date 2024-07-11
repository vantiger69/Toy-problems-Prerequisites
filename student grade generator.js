function calculateGrade() {
  let marks = prompt("Enter the student's score (between 0 and 100):");

  // Check if user cancelled prompt or input is not a number
  if (marks === null || isNaN(parseFloat(marks)) || marks < 0 || marks > 100) {
    alert("Invalid input! Please enter a number between 0 and 100.");
    return;
  }

  // Convert marks from string to number
  marks = parseFloat(marks);

  // Determine the grade based on the marks
  let grade;
  if (marks > 79) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Output the grade
  alert(`Student's grade is: ${grade}`);
}
