// Exercise 2 - Count vowels in a string
// Problem

// Count how many vowels (a, e, i, o, u) are in a string.

let str = "hello"
// Output:
// 2

// 1. Iterate over string
// 2. if the charcter in string has a,e,i,o,u then we need to update counter

let counter = 0;
for(let i=0; i<str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        counter = counter + 1;
    }
}

console.log("count",counter)
