const checkAir = function (data, threshold) {
  d = 0
  for (let i = 0; i<data.length; i++){
    if (data[i] === 'dirty'){
      d +=1
    }
  }
  if (d/data.length < threshold){
    return "Clean"
  }
  else{
    return "Polluted"
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))