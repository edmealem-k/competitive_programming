function countConsistentStrings(allowed: string, words: string[]): number {
    let output = 0;
    let allowedSet = new Set(allowed)

    for (const wd of words) {
        let isConsistent = true;
        for (const ch of wd) {
            if (!allowedSet.has(ch)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            output++;
        }
    }

    return output;
};