function countPositivesSumNegatives(input) {
  if (input == null) return [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) return (count += 1);
    else if ((input[i] = 0)) return;
    else
      input.reduce((acc, current) => {
         return acc + current;
      }, 0);
    return [count, acc];
  }
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, -5, -10]));
