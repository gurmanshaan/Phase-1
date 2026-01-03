//Exercise 2 - Function to count vowels
//Problem

//Create a function that returns the number of vowels in a string.

//Example:


function countVowels(str) {
    let counter =  0;
    for(let i=0; i< str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            counter = counter + 1;
        }
    }
    return counter;
}

let result = countVowels("hello"); 
console.log("result", result)
// 2

// 1. Create the function that receives string
// 2. Iterate over string
// 3. Check whether string has vowel then we need to increase the counter by 1;