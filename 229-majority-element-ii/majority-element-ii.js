/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  We track only two candidates because it is mathematically impossible for more than two elements to appear strictly more than \(\lfloor n / 3 \rfloor\) times in an array of size \(n\).
var majorityElement = function(nums) {
    if (!nums || !nums.length) return [];

    let cand1 = -1;
    let count1 = 0;
    let cand2 = -1;
    let count2 = 0;

    for (const num of nums) {
        if (num === cand1) {
            count1++
        } else if (num === cand2) {
            count2++
        } else if (count1 === 0) {
            cand1 = num
            count1 = 1
        } else if (count2 === 0) {
            cand2 = num
            count2 = 1
        } else {
            count1--
            count2--
        }
    }

    let result = []
    let threshold = Math.floor(nums.length / 3);

    count1 = 0
    count2 = 0

    for (const num of nums) {
        if (num === cand1) {
            count1++
        } else if(num === cand2) {
            count2++
        }
    }

    if (count1 > threshold) result.push(cand1)
    if (count2 > threshold) result.push(cand2)

    return result;
};