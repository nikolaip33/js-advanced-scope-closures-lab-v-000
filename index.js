function produceDrivingRange(range) {
  return function drvingRange(str1, str2) {
    let dist = parseInt(str2) - parseInt(str1) - range;
    console.log(dist > 0 ? `positive` : `negative`)
  }
}
