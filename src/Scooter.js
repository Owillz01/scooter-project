class Scooter {
  // scooter code here
  /* eslint-disable */
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial += 1
    this.charge = 100
    this.isBroken = false
  }

  rent(user){
    if(this.charge > 20 && !this.isBroken){
      this.user = user
      this.station = null
    }else{
      throw new Error("scooter needs to charge");
    }

    if (this.charge > 20 && this.isBroken) {
      throw new Error("scooter needs repair");
    }
  }

  dock(station){
    this.station = station
    this.user = null
  }
  
  recharge(){

  }

  requestRepair(){

  }
}

module.exports = Scooter
