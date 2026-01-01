// Given an array, print only odd numbers.

let numbers = [1, 2, 3, 4, 5]

//Output:
//1
//3
//5

//  1. First iterate to all numbers.
// 2. Check the number is odd, then console it

for( let i=0; i < numbers.length; i++){
    if( numbers[i] % 2 !==0){
    console.log("odd numbers", numbers[i]);
    }
}
