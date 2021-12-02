
/* 
Input: "Hello" & num = 4
Output: Lipps
Input: "abc" & num = 0
Output: abc
*/

function CaesarCipher(str, num) {

    let result = []
    if (num == 0) {
        return str
    }
    else {

        for (let i = 0; i < str.length; i++) {

            let ascii = str[i].charCodeAt(0)

            if (ascii >= 97 && ascii <= 122) {
                if (ascii <= 122) {
                    ascii += num
                    result.push(ascii)
                }
                else {
                    ascii += 97 + (ascii + num) % 122
                    result.push(ascii)
                }

            }
            else if (ascii >= 65 && ascii <= 90) {
                if (ascii <= 90) {
                    ascii += num
                    result.push(ascii)
                }
                else {
                    ascii += 65 + (ascii + num) % 90
                    result.push(ascii)
                }
            }
            else {
                result.push(ascii)
            }
        }

    }
    // return String.fromCharCode(result)
    return String.fromCharCode(...result)
}

console.log(CaesarCipher("world is SO bigger!", 1));