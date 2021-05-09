const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'bigshark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
const sortSpeciesByTeeth = arr => {
  const sorted = [];
  sorted.push(speciesArray[0]);  
  for (let i = 1; i < arr.length; i++){
    if(arr[i].numTeeth < arr[i - 1].numTeeth){
      sorted.unshift(arr[i]);
    }
    if(arr[i].numTeeth > arr[i - 1].numTeeth){
      sorted.push(arr[i]);
    }
    if(arr[i].numTeeth === arr[i - 1].numTeeth){
      if(arr[i].speciesName < arr[i - 1].speciesName){
        sorted.unshift(arr[i]);
      } else {
        sorted.push(arr[i]);
      }
    }
  }
  return sorted;
};
console.log(sortSpeciesByTeeth(speciesArray));
