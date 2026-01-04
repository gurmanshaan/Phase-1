// Exercise 2 - Return FIRST Vowel in a string

//Problem

//Return the first vowel found in a string.

//Example:

function getFirstVowel(str){
   for(let i=0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        return str[i];
    }
   }
   return null;
}

let result = getFirstVowel("hello"); // "e"
console.log("res",result)
let output = getFirstVowel("sky");   // null
console.log("output",output)

// 1. Create function that receives string
// 2. Iterate over string
// 3. If any char in string has vowel return it from there if not return null

