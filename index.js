function produceDrivingRange(range) {
  return function(trip) {
    return range > trip
  }
}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
