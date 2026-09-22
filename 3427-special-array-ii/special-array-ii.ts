function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
    const n = nums.length;
    const prefix = new Array(n).fill(0);

    // Precompute parity violations
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1];
        // If adjacent elements have the same parity, it's a violation
        if (Math.abs(nums[i] % 2) === Math.abs(nums[i - 1] % 2)) {
            prefix[i]++;
        }
    }

    // Answer each query in O(1) time
    return queries.map(([from, to]) => {
        return (prefix[to] - prefix[from]) === 0;
    });
};