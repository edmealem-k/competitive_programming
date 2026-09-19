function numberOfAlternatingGroups(colors: number[], k: number): number {
    let n = colors.length;
    let count = 0;
    let alternativingLength = 1;

    for (let i = 1; i < n + k - 1; i++) {
        if (colors[i % n] !== colors[(i-1) % n]) {
            alternativingLength++;
        } else {
            alternativingLength = 1;
        }

        if (alternativingLength >= k) {
            count++;
        }
    }

    return count;
};




























    // let count = 0;
    // let n = colors.length;
    // let alternatingLength = 1;

    // for (let i = 1; i < n + k - 1; i++) {
    //     if (colors[i % n] !== colors[(i - 1) % n]) {
    //         alternatingLength++;
    //     } else {
    //         alternatingLength = 1
    //     }

    //     if (alternatingLength >= k) {
    //         count++
    //     }
    // }

    // return count;