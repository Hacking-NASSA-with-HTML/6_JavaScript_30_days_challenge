// var a = [1, 2, 3];   a should equal [5, 10, 15] if multiplier = 5;

function multiplyEveryArrayElement(arr, multiplier) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= multiplier;
    }
    return arr;
}

var a = multiplyEveryArrayElement([1, 2, 3], 5);

console.log(a);