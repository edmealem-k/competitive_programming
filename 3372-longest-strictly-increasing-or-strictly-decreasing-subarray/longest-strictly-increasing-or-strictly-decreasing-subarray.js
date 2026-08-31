/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if (nums.length <= 1) {
        return 1;
    }

    let max_count = 1
    let count = 1
    let dir = nums[1] > nums[0] ? 1 : nums[1] < nums[0] ? -1 : 0; 

    for (let i = 0; i < nums.length - 1; i++) {
        next_num = nums[i + 1];
        num = nums[i]

        cur_dir = next_num > num ? 1 : next_num < num ? -1 : 0;

        if (cur_dir === 0) {
            count = 1;
        } else if (cur_dir === dir) {
            count += 1;
        } else {
            count = 2;
        }

        dir = cur_dir;
        max_count = Math.max(max_count, count);
    }

    return max_count;
};