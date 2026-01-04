// Exercise 1 - Return EVEN numbers count

//Problem

//Return how many even numbers are in an array.

//Example:


function countEvenNumbers(arr){
    let counter = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            counter = counter + 1;
        }
    }
    return counter;
}
let result = countEvenNumbers([1, 2, 3, 4, 5, 6]); 
console.log(result);
// 3

// 1. Create a function that recieves an array
// 2. Iterate over array 
// 3. if an array has even number, then we need to update the counter
// 4. at last, return the value of counter.