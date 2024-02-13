function sumInput() {
    let numbers = [];

    while(true) {
        let value = prompt("Number", 0);
        if (value == "" || value == null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    //OF not IN (not python-style)
    for (let num of numbers) {
        sum += num;
    }

    alert(numbers);
    return sum;
}

alert(sumInput());