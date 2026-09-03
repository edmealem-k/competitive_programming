/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    // [[1,2], [2,3], [4,5]]
    // [[1,2], [3,3], [4,5], [5,5], [6,6]]
    let len_nums1 = nums1.length
    let len_nums2 = nums2.length
    let result_arr = []

    const obj = {}
    for (let i = 0; i < nums1.length; i++) {
        let narr = nums1[i]
        obj[narr[0]] = narr[1]
    }

    for (let i = 0; i < nums2.length; i++) {
        let narr = nums2[i]
        obj[narr[0]] = (obj[narr[0]] || 0) + narr[1]
    }
    
    for (const key in obj) {
        result_arr.push([parseInt(key), obj[key]])
    }

    return result_arr
};