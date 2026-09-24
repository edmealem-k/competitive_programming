function numberOfSpecialChars(word: string): number {
    const lastLower: number[] = new Array(26).fill(-1);
    const firstUpper: number[] = new Array(26).fill(-1);

    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const code = char.charCodeAt(0);

        if (char >= 'a' && char <= 'z') {
            lastLower[code - 97] = i; // Store last occurrence of lowercase
        } else if (char >= 'A' && char <= 'Z') {
            const idx = code - 65;
            if (firstUpper[idx] === -1) {
                firstUpper[idx] = i; // Store first occurrence of uppercase
            }
        }
    }

    let count = 0;
    for (let i = 0; i < 26; i++) {
        // Condition: Both exist and all lowercase occurrences appear before the first uppercase
        if (lastLower[i] !== -1 && firstUpper[i] !== -1 && lastLower[i] < firstUpper[i]) {
            count++;
        }
    }

    return count;
};