function isPermutation(string1, string2) {
    if (string1 === string2) {
        return true;
    }
    if (string1.length !== string2.length) {
        return false;
    }
    let chars = {}, curChar;
    for (let i = 0; i < string1.length; i++) {
        curChar = string1.charAt(i);
        if (!chars[curChar]) {
            chars[curChar] = 1;
        } else {
            chars[curChar]++;
        }
    }
    return string2.split('').every((val) => {
        if (!chars[val]) {
            return false;
        }
        chars[val]--;
        return true;
    });
}

if (process.argv.length !== 4) {
    console.log('Usage: node CheckPermutation.js [string1] [string2]');
} else {
    console.log(isPermutation(process.argv[2], process.argv[3]));
}
