/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = new Map();

    // Initialize bucket array with empty sub-arrays (length = nums.length + 1)
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    // 1. Populate frequency of each number
    for (const n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
    }

    // 2. Populate frequency buckets
    for (const [n, c] of count.entries()) {
        freq[c].push(n);
    }

    // 3. Iterate backwards from highest frequency bucket to collect top k elements
    const res = [];
    for (let i = freq.length - 1; i>0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }

    return res;
};