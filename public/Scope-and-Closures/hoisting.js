// ? Example one
function getValue() {
  function returnValue() {
    return 1;
  }

  return returnValue();

  function returnValue() {
    return 2;
  }
}

let result = getValue();

console.log(result);

// ? Example two

function getValue2() {
  let returnValue2 = function () {
    return 1;
  };

  return returnValue2();
  let returnValue = function () {
    return 2;
  };
}

let resultTwo = getValue2();

console.log(resultTwo);
