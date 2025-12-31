// print fist and last element of array

let arr = ["red", "green", "blue"];

for(let i=0; i< arr.length; i++){
    if(i === 0 || i === arr.length - 1){
        console.log(arr[i]);
    }
}
