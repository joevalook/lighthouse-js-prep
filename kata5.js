function urlEncode(data) {
  let b = "";
  let k = 0;
  data = data.trim();
  for (let i = 0; i<data.length; i++){
    if (data[i] === " " ){
      b += "%20"
    }
    else{
      b += data[i]
    }
  }
  return b;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));