function numberOfVowels(data) {
  let b = 0;
  
  for (let i = 0; i<data.length; i++){
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u" ){
      b += 1
    }
  }
  return b
}



