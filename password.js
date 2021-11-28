/*


1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark or mathematical symbol.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.
*/


function StringChallenge(str) {

    if (str.length<7 || str.length>31) {
        return false
    }

    if (str.search("[A-Z]")==-1) {
        return false
    }
    if (str.search("[0-9]")==-1) {
        return false
    }
    
    let lower  = str.toLowerCase()

    if (lower.search("password")>-1) {
        return false
    }
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\+|\*|\-|\:|=|/]/g;
    if (str.search(regex) ==-1) {
        return false
    }

    return true 
}

// keep this function call here 
console.log(StringChallenge("passWord123!!!!"));