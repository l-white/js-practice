const subLength = (string, char) => {
  let indices = [];
  for (let i = 0; i < string.length; i++){
    if (string[i] === char) {
      indices.push(i);
      if (indices.length > 2){
        return 0;
      }
    }
  }
  if (indices.length < 2){
    return 0;
  } else {
  return indices[1] - indices[0] + 1;
  }
};
