function produceDrivingRange(range) {
  return function drvingRange(str1, str2) {
    const dist parseInt(str2) - parseInt(str1) - range;
    dist > 0 ? return `within range by ${dist}` : return `${dist} out of range` 
  }
}
