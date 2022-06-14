function foo(a) {
  let b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2);

const students = [
  { id: 14, name: "Dion" },
  { id: 6, name: "Carolina" },
  { id: 112, name: "Zé Lopes" },
  { id: 73, name: "Fernanda" },
];

function getStudentName(studentID) {
  for (let student of students) {
    if (student.id === studentID) {
      return student.name;
    }
  }
}

const nextStudent = getStudentName(112);
console.log(`O nome do estudante é:  ${nextStudent}`);
