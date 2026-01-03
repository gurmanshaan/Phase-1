// Exercise 1 - Function to give print EVEN numbers

// Problem - 
// Create a function that prints all even numbers from an array

function printEvenNumbers(arr) {
for(let i=0; i<arr.length;i++){
    if(arr[i] % 2 === 0){
        console.log("even numbers", arr[i])
    }
}
};

printEvenNumbers([1, 2, 3, 4, 5, 6]);
// Output:
// 2
// 4
// 6


// 1. create the function that receives array
// 2. Iterate over array 
// 3. check whether the number is divided by 2 then the remainder is 0  then it is even
