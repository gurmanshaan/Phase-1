// Print numbers GREATER than 10

let arr = [5, 12, 8, 20, 3]
//Output:
//12
//20

//  1. Need to iterate over every number in the array
//  2. check the number if it is greater than 10 then we will console the number

for( let i=0; i < arr.length; i++){
    if(arr[i] > 10 ){
    console.log("numbers greater than 10", arr[i]);
    }
}