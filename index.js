function produceDrivingRange(range) {
  return function drvingRange(str1, str2) {
    return parseInt(str2) - parseInt(str1);
  }
}
