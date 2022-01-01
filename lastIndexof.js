function lastIndexOf (arr,val){
  for (let i = arr.length - 1; i >=-1; i--){
    if (i == -1){
      return -1
    }

    else if (arr[i] == val){
      return i
    }
    else{
      continue
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2)	)
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3)	)
console.log(lastIndexOf([ 5, 5, 5 ], 5)	)
console.log(lastIndexOf([], 3))