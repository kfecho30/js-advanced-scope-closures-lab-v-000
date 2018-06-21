function produceDrivingRange() {

}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(){
      this.id = ++driverId
    }
  }
}
