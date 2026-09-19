function findWinningPlayer(skills: number[], k: number): number {
    let indx = 0;
    let currwincount = 0;
    let ptr = 0;

    // [7, 11]
    // k = 2
    for (let i = 1; i < skills.length; i++) {
        if (skills[ptr] > skills[i]) {
            indx = ptr;
            currwincount++
        } else {
            ptr = i;
            indx = i;
            currwincount = 1;
        }

        if (currwincount >= k) {
            break;
        }
    }

    return indx;
};