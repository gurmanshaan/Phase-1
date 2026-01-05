//Exercise 2 - Count vowels (return value)

function countVowels(str) {
    let counter = 0;
   for(let i=0; i < str.length; i++){
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i'|| str[i] === 'o'|| str[i] === 'u') {
        counter = counter + 1;
    }
   }

   return counter;
}

let result = countVowels("hello")
console.log(result);
// 2