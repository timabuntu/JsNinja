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
const socialNetworks = ["youtube", "twitter", "instagram", "facebook"];

const logArrayInfo = (socialNetworks, index, array) => {
  console.log(index, socialNetworks, array);
};
socialNetworks.forEach(logArrayInfo);
