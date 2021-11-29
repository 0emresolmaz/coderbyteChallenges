// in :never odd or even
// out : true => if reverse string == string

function Palindrome(str) {

    var reversed = str.replace(/\s/g, '').split("").reverse().join("");

    if (str.replace(/\s/g, '').match(reversed)) {
        return true;
    }
    else {
        return false;
    }

}

// keep this function call here 
console.log(Palindrome("never odd or even"));