function reverseString(str){
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
}

let result = reverseString("abcd");
console.log(result);
