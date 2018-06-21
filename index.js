function produceDrivingRange(blockRange) {
  return function(trip) {
    if (blockRange > trip) {
      return `within range by ${blockRange - trip}`
    }
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
