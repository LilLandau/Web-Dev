function extractCurrencyValue(str) {
    return +str.slice(1);
}

alert(extractCurrencyValue('$120'));
alert(extractCurrencyValue('$1200'));
alert(extractCurrencyValue('$220'));