/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const prefixSums = new Map();

    prefixSums.set(0, 1);

    let currSum = 0;
    let totalSubarrays = 0;

    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        const complement = currSum - k;
        if (prefixSums.has(complement)) {
            totalSubarrays += prefixSums.get(complement);
        }

        const count = prefixSums.get(currSum) || 0;
        prefixSums.set(currSum, count + 1);
    }

    return totalSubarrays;
};