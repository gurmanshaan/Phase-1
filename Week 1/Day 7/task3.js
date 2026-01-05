//  Exercise 3 - Print characters at even indexes

let str = "abcdef"
for(let i=0; i<str.length;i++){
    if(i % 2 === 0){
        console.log(str[i]);
    }
}

// a c e