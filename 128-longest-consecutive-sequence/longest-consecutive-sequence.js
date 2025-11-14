/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // const numSet = new Set(nums);
    // let longest = 0;

    // for (const n of nums) {
    //     if (!numSet.has(n - 1)) {
    //         let length = 0;
    //         while (numSet.has(n + length)) {
    //             length += 1;
    //         }
    //         longest = Math.max(length, longest)
    //     }
    // }
    // return longest
    
    const mp = new Map();
    let res = 0;

    for (let num of nums) {
        if (!mp.has(num)) {
            mp.set(
                num,
                (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1,
            );
            mp.set(num - (mp.get(num - 1) || 0), mp.get(num));
            mp.set(num + (mp.get(num + 1) || 0), mp.get(num));
            res = Math.max(res, mp.get(num));
        }
    }
    return res;
};