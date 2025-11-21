const array = [1, -4, 7, 12];
function positiveSum(array)
for (let i = 0; i < array.length; i++) {
  let x = 0;
  if (array[i] > 0) {
    x += array[i];
} else {
    return;
}
return console.log(x);
}
