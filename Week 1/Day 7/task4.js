// Exercise 4 - First & Last Character (NO LOOP)

function getFirstandLast(str){
    let first = str[0];
    let last = str[str.length - 1];
    return { "first": first, "last": last};
}

let result = getFirstandLast("abcd")
console.log(result)
// { first: "a"; last: "d"}