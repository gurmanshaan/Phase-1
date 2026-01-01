// Print EVEN numbers from an array

let arr =[1, 2, 3, 4, 5, 6]

// Output:
// 2
// 4
// 6

//1. iteate over every index of array 
// 2. then i want to check the number is even then i want to console log the number

for(let i=0; i< arr.length; i++){
    if(arr[i] % 2 === 0){
    console.log("even numbers", arr[i]);
    }
}