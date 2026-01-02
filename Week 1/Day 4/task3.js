// Exercise 3 - Print characters at EVEN indexes
// Problem

let str = "abcdef";

// Output:
// a
// c
// e


// 1. Iterate over string
// 2. if index is even then we need to console

for(let i=0; i < str.length; i++){
    if(i % 2 === 0){
        console.log("output",str[i]);
    }
}
