function sortedSquares(nums: number[]): number[] {
    // return nums.map(num => num ** 2).sort((a,b) => a - b)
    let res = new Array(nums.length).fill(0);

    let left = 0;
    let right = nums.length - 1;

    // [-4,-1,0,3,10]
    // left = 2; right = 2; res = [0,1,9,16,100]
    // i = 0
    for (let i = nums.length - 1; i >= 0; i--) {
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
