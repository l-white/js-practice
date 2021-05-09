const isTheDinnerVegan = arr => {
  const result = arr.filter(item => item.source === 'plant');
  if (result.length < arr.length){
    return false;
  } else {
    return true;
  }
};

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

const dinner2 = [{name: 'hummus', source: 'plant'}, {name: 'kale salad', source: 'plant'}];
console.log(isTheDinnerVegan(dinner2));
// Should print true
