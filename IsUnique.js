function isUnique(string) {
    let map = {};
    return string.split('').every((val) => {
        if (map[val]) {
            return false;
        }
        map[val] = 1;
        return true;
    });
}

process.argv.forEach((val, index) => {
    if (index > 1) {
        console.log(isUnique(val));
    }
});

