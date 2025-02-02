function produceDrivingRange(range) {
  return function(str1, str2) {
    const dist = parseInt(str2) - parseInt(str1);
    return dist <= range ? `within range by ${range - dist}` : `${dist - range} blocks out of range`
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
