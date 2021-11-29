// in : 6coderbyte5
// out: 5CODERBYTE6   > change first and last character and To upper

let str = "6coderbyte5"
let newStr = ""
const regex = /\d\w+\d/g

//console.log(str[0].charCodeAt());

for (let i = 0; i < str.length; i++) {

    let myChar = str[i].charCodeAt()
    if (myChar >= 97 && myChar <= 122) {
        newStr += str[i].toUpperCase().toString()
    }
    else if (myChar >= 65 && myChar <= 90) {
        newStr += str[i].toLowerCase().toString()
    }
    else {
        newStr += str[i].toString()

    }
}

if (newStr.match(regex) == null) {
    console.log(newStr);
}
else {

    let result = swap(newStr.match(regex).toString())
    let result2 = newStr.replace(newStr.match(regex).toString(), result)
    console.log(result2);
}

function swap(str) {
    let strSplit = str.split("")

    let first = strSplit[0];
    let last = strSplit[strSplit.length - 1];

    strSplit[0] = last;
    strSplit[strSplit.length - 1] = first;

    return strSplit.join("");
}