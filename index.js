function produceDrivingRange(range) {
  return function drvingRange(str1, str2) {
    const dist = range - parseInt(str2) - parseInt(str1);
    console.log(dist)
    return dist > 0 ? `within range by ${dist}` : `${dist} blocks out of range`
  }
}
