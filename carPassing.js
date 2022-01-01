function carPassing(cars,sp){
  cars.push ({ time: Date.now(), speed: sp })
  return cars
}