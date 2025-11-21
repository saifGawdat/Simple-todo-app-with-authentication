function countPositivesSumNegatives(input) {
  if (input == null) return [];
  var count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0)  count++;
    else{
      var negativeSum = input.reduce((acc ,  input[i]) => {

      if (input[i] < 0) {
        acc += input[i]
      }
      else return

      }, 0);
    }
    var newArray = [count , negativeSum]
}
return newArray;
}
console.log(countPositivesSumNegatives([1, 2, 6 , 3,  4, -5, -10]));
