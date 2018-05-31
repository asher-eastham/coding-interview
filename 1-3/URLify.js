
/**
 * @param string Input string to URLify
 * @return Trimmed string with all internal spaces replaced by '%20'
 */
function urlify(string) {
    return string.trim().replace(/\s/g, '%20');
}

if (process.argv.length !== 3) {
    console.log('Usage: node URLify.js [string]');
} else {
    console.log(urlify(process.argv[2]));
}
