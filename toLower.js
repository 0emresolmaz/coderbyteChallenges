/*
Input: "cats AND*Dogs-are Awesome"
Output: cats_and_dogs_are_awesome
Input: "a b c d-e-f%g"
Output: a_b_c_d_e_f_g
*/

function StringChallenge(str) {

    let lower = str.toLowerCase().split("");
    let list = ""

    for (let i = 0; i < lower.length; i++) {
        let ascii = lower[i].charCodeAt(0);
        if (ascii > 96 && ascii < 123) {
            list += lower[i]
        }
        else {
            list += "_"
        }
    }
    return list;
}

// keep this function call here 
console.log(StringChallenge("cats AND*Dogs-are Awesome"));