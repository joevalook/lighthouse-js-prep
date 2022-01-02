function whereCanIPark(data, vehicle) {
  let b = [];
  var stop = 0;
  for (let i = 0; i<data.length && stop == 0; i++){
    for (let j = 0; (j < data[i].length) && (stop == 0); j++){
      if (vehicle == "regular" && data[i][j] === "R"){
        b.push(j);
        b.push(i);
        stop = 1;
      }
      else if (vehicle == "small" && (data[i][j] === "R" || data[i][j] === "S")){
        b.push(j);
        b.push(i);
        stop = 1;
      }
      else if (vehicle == "motorcycle" && (data[i][j] === "R" || data[i][j] === "S" || data[i][j] === "M")){
        b.push(j);
        b.push(i);
        stop = 1;
      }
      
    }
  }
  if (b.length === 0){
    return "Sorry, there are no spots available"
  }

  else{
    return b
  }
  
}

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))