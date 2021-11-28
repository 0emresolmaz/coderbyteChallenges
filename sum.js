// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true



let arr = [3,5,-1,8,12]

let max = Math.max(...arr)

const index = arr.indexOf(max);
if (index > -1) {
    arr.splice(index, 1) //[ 5, 7, 1, 2 ]
}

console.log(test(arr));

function test(arr) {
    var sum = arr.reduce(function (a, b) { return a + b; }, 0);
    if (sum == max) {
        return true;
    } else {
        for (var i = 0; i < arr.length; i++) {
            var newArr = arr.slice();
            newArr.splice(i, 1);
            if (test(newArr)) {
                return true;
            }
        }
        return false;
    }
}



