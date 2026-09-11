function sortedSquares(nums: number[]): number[] {
    // return nums.map(num => num ** 2).sort((a,b) => a - b)
    let na: number[] = [];
    for (let n of nums) {
        na.push(n * n)
    }
    return na.sort((a, b) => a - b)
};