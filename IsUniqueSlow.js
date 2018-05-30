function isUnique(string) {
    let arr = string.split('').sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return false;
        }
    }
    return true;
}

process.argv.forEach((val, index) => {
    if (index > 1) {
        console.log(isUnique(val));
    }
});
