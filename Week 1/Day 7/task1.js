//Exercise 1 - Count even numbers (return value)

function countEven(arr){
    let counter = 0;
    for(let i=0; i< arr.length;i++){
       if(arr[i] % 2 === 0){
         counter = counter + 1;
       }
    }
    return counter;
}

let result = countEven([1, 2, 3, 4, 5, 6]);
console.log(result)
// 3

