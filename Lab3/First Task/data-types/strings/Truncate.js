function truncate(str, maxlen) {
    if (str.length > maxlen) {
        return str.slice(0, maxlen - 1) + '...';
    }
    else {
        return str;
    } 
}

  
alert(truncate("Hello guys today we gonna watch top five cats. Numero uno"));
alert(truncate("Danial"));