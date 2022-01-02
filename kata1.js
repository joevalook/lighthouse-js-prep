function sumLargestNumbers(data) {
  let b = 0;
  let c = 0;
  let k = 0;
  for (let i = 0; i<data.length; i++){
    if (b<data[i]){
      b = data[i];
      k = i
    }
  }
  for (let j =0; j<data.length; j++){
    if (c<data[j] && j != k){
      c = data[j];
    }
  }
  return (b + c);
}

