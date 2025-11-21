function getAge(inputString) {
 var x = inputString[0];
 var y = x.replace(/[" + ']/g , '')
  return y;
}
getAge("9 years old");