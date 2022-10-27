//* SHADOWING  */
const studentName = "Thiago";

function printStudent(studentName) {
  studentName = studentName.toUpperCase();
  console.log(studentName);
}

printStudent("Fernanda");

printStudent(studentName);

console.log(studentName);
