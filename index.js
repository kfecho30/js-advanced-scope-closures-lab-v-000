function produceDrivingRange() {

}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name){
      this.name = name;
      this.id = ++driverId
    }
  }
}
