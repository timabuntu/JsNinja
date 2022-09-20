//Example HTML
const ul = document.querySelector('[data-js="ul"]');

const socialNetworks = ["youtube", "twitter", "instagram", "facebook"];

let HTMLTemplate = "";

socialNetworks.forEach((socialNetwork) => {
  HTMLTemplate += `<li class="text-pink-500">${socialNetwork}</li>`;
});

ul.innerHTML = HTMLTemplate;

// forEach e callbacks

// Callbacks
const myFunc = (callback) => {
  const value = 77;

  callback(value);
};

myFunc((number) => {
  console.log(number);
});

// forEach

const logArrayInfo = (socialNetworks, index, array) => {
  console.log(index, socialNetworks, array);
};
socialNetworks.forEach(logArrayInfo);
