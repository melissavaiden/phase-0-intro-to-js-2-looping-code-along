const names = ["Chloe", "Sean", "Gabriella"];

function writeCards(names, exclamation) {
    let newNames = []
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${exclamation} gift!`);
    }
    return newNames;
}
writeCards(names);