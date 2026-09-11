function sortedSquares(nums: number[]): number[] {
    // return nums.map(num => num ** 2).sort((a,b) => a - b)
    let n = nums.length
    let res:number[] = new Array(n).fill(0);
    let left = 0;
    let right = n - 1;

    // [-4,-1,0,3,10]
    // left = 1; right = 3; res = [0,0,0,16,100]
    // i = 3
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[i] = nums[left] ** 2;
            left++;
        } else {
            res[i] = nums[right] ** 2;
            right--;
        }
    }

    return res
};
