const revert = (str) => {
    if (typeof str === "string") {
        let word = str.split('')
        let reverted = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reverted += word[i];
        }
        return reverted;
    } else {
        return "Votre paramètre doit être une chaîne de caractère et rien d'autre!"
    }

}

module.exports = revert