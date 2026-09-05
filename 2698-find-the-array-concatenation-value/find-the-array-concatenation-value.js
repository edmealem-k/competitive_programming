/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    // [7,52,2,4]
    // [5,14,13,8,12]
    let leftptr = 0
    let rightptr = nums.length - 1

    // accumulater
    let acc = 0;
    // lef = 0, right=3, accstr = "74", acc = 0;
    // for (let i = 0; i < nums.length; i++) {
    while(leftptr <= rightptr) {
        // if left pointer and right pointer are the same, nums must be a odd length
        if (leftptr === rightptr) {
            acc += nums[leftptr]
        } else {
            acc += parseInt(`${nums[leftptr]}${nums[rightptr]}`)
        }

        leftptr += 1;
        rightptr -= 1;
    }
    
    return acc
};