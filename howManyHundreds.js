function howManyHundreds(x){
  let a = x - (x%100)
  return a/100;
}