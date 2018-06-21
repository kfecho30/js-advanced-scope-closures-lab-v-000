function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let dist = Math.abs(end-start)
    if (blockRange > trip) {
      return `within range by ${blockRange - trip}`
    }
    else {
      return `${trip-blockRange} blocks out of range`
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
