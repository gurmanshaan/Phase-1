// COUNT Even Numbers

let numbers = [2,5,8,11,4]

// OUTPUT:
// Even Count : 3


//  1. Iterate over numbers 
//  2. if the number is even , then we will increase the value of counter by 1

let counter = 0;
for( let i =0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        counter = counter + 1;
    }
}
console.log("Even Count:", counter )