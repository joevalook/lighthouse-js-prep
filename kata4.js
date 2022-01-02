function instructorWithLongestName(data) {
  let b = 0;
  let k = 0;
  
  for (let i = 0; i<data.length; i++){
    if (data[i]["name"].length > b){
      b = data[i]["name"].length
      k = i
    }
  }
  return data[k];
}


