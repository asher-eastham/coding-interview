/*
 * @param string to check
 * @return true if string is a permutation of a palindrome, false otherwise
 */
function isPalindromePermutation(string) {
    // Hash all the characters in the string.
    let map = {};
    string.split('').forEach((val) => {
        if (map[val]) {
            map[val]++;
        } else {
            map[val] = 1;
        }
    });
    // Permutations of palindromes will have at most one letter that appears an
    // odd number of times (the central letter in the palindrome).
    let foundOddLetter = false;
    return Object.keys(map).every((val) => {
        if (map[val] % 2) { // char appears an odd number of times
            if (foundOddLetter) { // we already have one odd char, so this 
            // string can't be a palindrome
                return false;
            }
            foundOddLetter = true;
        }
        return true;
    });
}

process.argv.forEach((val, index) => {
    if (index > 1) {
	console.log(isPalindromePermutation(val));
    }
});
