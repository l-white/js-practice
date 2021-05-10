const factorial = y => {
  if (y === 0){
    return 1;
  } else {
    return y * factorial(y-1);
  }
};

console.log(factorial(6));
// returns 720
