function isUnique(string) {
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

process.argv.forEach((val, index) => {
    if (index > 1) {
        console.log(isUnique(val));
    }
});
