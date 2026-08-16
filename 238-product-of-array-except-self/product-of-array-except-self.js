/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        res[i] = prefix;
        prefix = nums[i] * prefix;
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] = res[i] * suffix;
        suffix = nums[i] * suffix;
    }

    return res
};