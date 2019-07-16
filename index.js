function produceDrivingRange(range) {
  return function drvingRange(str1, str2) {
    const dist = parseInt(str2) - parseInt(str1) - range;
    return dist > 0 ? `positive` : `negative`
  }
}
