function produceDrivingRange(range) {
  return function drvingRange(str1, str2) {
    let dist = range - parseInt(str2) - parseInt(str1);
    console.log(dist > 0 ? `positive` : `negative`)
  }
}
