/*
Input: "never odd or even"
Output: true
Input: "eye"
Output: true
*/

function StringChallenge(str) { 

let str1 = str.replace(/\s/g,"") 


let str2 = reverseString(str1)
if (str1 === str2) {
    return true
}
return false
}

function reverseString(str) {
    
    let a =''
    for (let i = str.length-1; i >= 0; i--) {
       a+= str[i]
    }
    return a
}
   
// keep this function call here 
console.log(StringChallenge("never odd or even"));