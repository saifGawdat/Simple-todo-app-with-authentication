function countPositivesSumNegatives(input) {
  if (input == null) return [];
  var count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0)  count++;
    else
      const negativeSum = input.reduce((acc, current) => {
         return acc + current;
      }, 0);
      var newArray = [count , acc]
    }
    return newArray;
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, -5, -10]));
