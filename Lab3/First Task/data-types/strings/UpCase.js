function toUpFirst(s) {
    if (!s) return s;

    return s[0].toUpperCase() + s.slice(1);
}

alert(toUpFirst("danial"));