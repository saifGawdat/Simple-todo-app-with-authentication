const array = [1, -4, 7, 12];
for (let i = 0; i < array.length; i++) {
    let x = 0;
    if (array[i] > 0) {
        array[i] += x;
        return console.log(x);
    } else {
        return;
    }
}
