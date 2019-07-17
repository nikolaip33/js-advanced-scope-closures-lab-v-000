function produceDrivingRange(range) {
  return function(str1, str2) {
    const dist = parseInt(str2) - parseInt(str1);
    return dist <= range ? `within range by ${range - dist}` : `${dist - range} blocks out of range`
  }
}

function produceTipCalculator(tipP){
  return function tipCalc() {
    
  }
}
