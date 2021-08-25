const revert = (str) => {
    let word = str.split('')
    let reverted = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverted += word[i];
    }
    return reverted;
}

module.exports = revert