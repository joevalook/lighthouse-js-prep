function judgeVegetable(arr, char){
  let j = 0
  let k = "there"
  for(let i =0; i<arr.length; i++){
    if (arr[i][char] > j){
      j = arr[i][char]
      k = arr[i]["submitter"]
    }
  }
  return k
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(vegetables[2].redness)