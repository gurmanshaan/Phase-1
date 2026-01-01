// Print numbers at EVEN indexes

let numbers = [10,20,30,40,50];

// Output:
// 10
// 30
// 50

// 1. Iterate over numbers/indexes
// 2. if index is even then console it

for(let i=0; i < numbers.length; i++){
    if( i % 2 === 0){        
    console.log("even indexes", numbers[i]);
    }
}