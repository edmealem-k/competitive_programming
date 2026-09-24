function minimumLevels(possible: number[]): number {
    const n = possible.length;
    // Map 0 to -1, and 1 remains 1
    const nums = possible.map(val => (val === 0 ? -1 : 1));
    
    // Total sum of all elements (Bob's initial score if Alice plays 0 levels)
    const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
    
    let aliceScore = 0;
    
    // Alice must play at least 1 level, and Bob must play at least 1 level (i < n - 1)
    for (let i = 0; i < n - 1; i++) {
        aliceScore += nums[i];
        const bobScore = totalSum - aliceScore;
        
        if (aliceScore > bobScore) {
            return i + 1; // Return number of levels Alice plays (1-based index)
        }
    }
    
    return -1;
};