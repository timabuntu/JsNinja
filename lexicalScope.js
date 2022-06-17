//*  Closure é o escopo criado quando uma função é declarada
//*  Esse escopo permite a função acessar e manipular variáveis externas à função
//*  A função lembra do lugar onde ela foi definida, a partir disso ela busca a variável no escopo em que ela foi criada, e assim continua a busca níveis acima dela até ela encontrar

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
