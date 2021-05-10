const findMyKeys = arr => {
  const index = arr.findIndex(keysIndex => keysIndex === "keys");
  return (index > -1 ? index : -1);
};

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];
console.log(findMyKeys(randomStuff))
// Should print 4
