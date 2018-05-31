/**
 * @param string Input string to check if all characters are unique
 * @return true if all characters in string are unique, false otherwise
 * Note: this is the O(n lg n) time, O(1) space implementation, which sorts the
 * string.
 */
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
