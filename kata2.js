function conditionalSum(data, condition) {
  let b = 0;
  
  for (let i = 0; i<data.length; i++){
    if ((condition === "odd" && (data[i]%2) === 1) || (condition === "even" && (data[i]%2) === 0)){
      b += data[i]
      
    }
  }
  return b
}

