function countPositivesSumNegatives(input) {4
    if(!input || input.length === 0 ) return[];
    var count = 0 ;
    var sum = 0 ;
    for(let i of input){
        if(i>0) count ++;
        else if (i<0) sum += i ;
    }
    
}
console.log(countPositivesSumNegatives([1,2,3,4,5,-10,-15]));