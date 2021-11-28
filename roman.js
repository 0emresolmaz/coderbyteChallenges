//I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000

/* 
Input: "IV"
Output: 4
Input: "XLVI"
Output: 46

*/

function StringChallenge(str) {

    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let one = getRomen(str[i])
        let two = getRomen(str[i + 1])

        if (one < two) {
            sum -= one
        }
        else if (one >= two ) {
            sum += one
        }
        else if(str[i]== str[str.length-1])
        {
            sum+= one
        }
    }
    return sum

}
function getRomen(str) {
    let result;
    switch (str) {
        case "I": return result = 1; break;
        case "V": return result = 5; break;
        case "X": return result = 10; break;
        case "L": return result = 50; break;
        case "C": return result = 100; break;
        case "D": return result = 500; break;
        case "M": return result = 1000; break;

        default:
            break;
    }

}

console.log(StringChallenge("XLVI"));