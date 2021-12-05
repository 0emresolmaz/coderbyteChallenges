//find max item and delete it

let nums = [100, 57, 2, 8, 6, 6, 5, 22, 91, 90, 100, 12]
let max = Math.max(...nums)

let arr = nums.filter(item => item !== max)


console.log(arr);