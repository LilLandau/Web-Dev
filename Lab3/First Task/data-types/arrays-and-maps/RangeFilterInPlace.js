function filterRangeInPlace(arr, start, end) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < start || arr[i] > end) {
            arr.splice(i, 1);
        }
    }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);

alert( arr );