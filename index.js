function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let dist = Math.abs(end-start);
    if (blockRange > dist) {
      return `within range by ${blockRange - dist}`
    }
    else {
      return `${dist-blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(fare){
  return function(tip){
    return tip*fare
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
