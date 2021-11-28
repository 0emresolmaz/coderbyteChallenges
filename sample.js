

let str = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]

const arr1 = str[0].replace(/\s/g, '').split(',')
const arr2 = str[1].replace(/\s/g, '').split(',')

let result = []

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        result.push(arr1[i])
    }
}

console.log(result.join(','));




