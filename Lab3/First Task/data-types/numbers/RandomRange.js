function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

alert(getRandom(1, 5));