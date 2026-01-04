// Exercise 3 - Refactor old logic

//Refactor this logic without using a loop:

function getFirstAndLast(str) {
    let first = str[0];
    let last = str[str.length - 1]
    return { "first":first, "last":last};
    // improve this
}


//Expected behavior:

let result = getFirstAndLast("abcd"); // { first: "a", last: "d" }
console.log(result);

// 1. Declare varibles and return the first and last 