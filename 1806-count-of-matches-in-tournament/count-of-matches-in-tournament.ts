function numberOfMatches(n: number): number {
    let matches = 0;
    let hasReminder = false;

    while(n > 1) {
        if (n % 2 == 0) {
            matches += n/2;
            n = n/2;
        } else {
            matches += Math.floor(n/2);
            n = Math.floor(n/2) + 1;
        }
    }

    return matches;
};