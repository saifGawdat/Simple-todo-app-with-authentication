const array = [1, -4, 7, 12];
function positiveSum(array){
    
let x = 0;
for (let i = 0; i < array.length; i++) {

  if (array[i] > 0) {
    x += array[i];
} 
return x;
}
}
c