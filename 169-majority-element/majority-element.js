/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = {};
    let res = 0;
    let maxCount = 0;

    for (const n of nums) {
        count[n] = 1 + (count[n] ?? 0)
        res = count[n] > maxCount ? n : res;
        maxCount = count[n] > maxCount ? count[n] : maxCount
    }

    return res
};