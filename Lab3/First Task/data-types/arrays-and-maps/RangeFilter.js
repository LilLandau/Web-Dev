function filterRange(arr, start, end) {
    return arr.filter(num => (start <= num && num <= end));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); 

alert( arr );