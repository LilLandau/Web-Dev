function getMaxSubSum(arr) {
    let total = 0;
    let cur = 0;

    for (let num of arr) {
        cur += num;
        total = Math.max(cur, total);
        if (cur < 0) cur = 0;
    }

    return total;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([2, -1, 2, 3, -9])); 
alert(getMaxSubSum([-1, 2, 3, -9, 11])); 
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5])); 
alert(getMaxSubSum([1, 2, 3])); 