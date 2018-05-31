/**
 * @param string Input string to check whether all characters are unique
 * @return true if the string contains all unique characters, false otherwise.
 * Note: this is the O(n) time, O(n) space implementation, using a map.
 */
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

