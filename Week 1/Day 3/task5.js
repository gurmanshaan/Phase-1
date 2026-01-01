// Print numbers less than 5

let numbers = [3,7,1,9,4]

// Output: 
// 3
// 1
// 4

//  1. Iterate over all numbers
// 2. Check if the number is less than 5 then console

for(let i= 0; i < numbers.length; i++){
    if(numbers[i] < 5) {
    console.log("numbers less than 5", numbers[i]);
    }
}