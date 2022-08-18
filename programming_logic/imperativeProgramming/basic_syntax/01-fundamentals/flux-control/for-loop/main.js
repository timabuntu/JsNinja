// for loop
const names = ["Linus", "Ada", "Bill"];
for (let iteration = 0; iteration < names.length; iteration++) {
  const HTMLTemplate = `
    <p>${names[iteration]}</p>
    `;
  console.log(HTMLTemplate);
}
