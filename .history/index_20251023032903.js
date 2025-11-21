function arrayPlusArray(arr1, arr2) {
    var sum1 = arr1.reduce((acc, current)=> acc + current)
    var sum2 = arr2.reduce((acc, current)=> acc + current)
  return arr1 + arr2;
}
