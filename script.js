function hasDuplicate(arr) {
    return [...new Set(arr)].length < arr.length ? true : false;
}

function vowelCount(str) {
    const vowelCount = new Map();
    const vowels = new Set('AEIOUaeiou')
    for (let char of str) {
        if (vowels.has(char)) {
            // Practicing Ternary
            !vowelCount.has(char) ? vowelCount.set(char, 1) : vowelCount.set(char.toLowerCase(), vowelCount.get(char.toLowerCase()) + 1);

            // if (!vowelCount.has(char)) {
            //     vowelCount.set(char, 1);
            // }
            // else {
            //     vowelCount.set(char.toLowerCase(), vowelCount.get(char.toLowerCase()) + 1);
            // }
        };
    }
    return vowelCount;
}