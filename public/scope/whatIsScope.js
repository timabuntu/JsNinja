function foo(a) {
  const b = a;

  return a + b;
}

console.log(foo(2));

// --------------------------

const b = 4;

function foo2(a) {
  console.log(a + b);
}

console.log(foo2(b));
