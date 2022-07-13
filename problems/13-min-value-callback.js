/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {
    if (cb === undefined) {
        return findSmallest(arr);
    } else { return cb(findSmallest(arr))}
    
};

function findSmallest(arr){
    let smallest = Infinity;
    for (let el of arr) {
    if (el < smallest) {
        smallest = el
        }
    }
    return smallest;
}





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
