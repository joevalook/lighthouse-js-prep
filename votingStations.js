function chooseStations(stations){
  let acceptedSchools = []
  for (let x of stations){
    if (x[1] >= 20 && (x[2] == 'school' || x[2] =="community centre")){
      acceptedSchools.push(x[0])
    }
    else{
      continue
    }
  }
  return acceptedSchools
}

console.log(chooseStations([
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]));

