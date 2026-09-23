function minimumAddedInteger(nums1: number[], nums2: number[]): number {
    // Sort both arrays in ascending order
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    // Helper function to check if difference x is valid by skipping at most 2 elements
    const isValid = (x: number): boolean => {
        let i = 0; // pointer for nums1
        let j = 0; // pointer for nums2
        let removed = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] + x === nums2[j]) {
                j++;
            } else {
                removed++;
            }
            i++;
        }

        return removed <= 2;
    };

    // The smallest element in nums2 (nums2[0]) must match one of the 
    // first three smallest elements in nums1 because we can remove at most 2 elements.
    let ans = Infinity;
    for (let i = 0; i < 3; i++) {
        const x = nums2[0] - nums1[i];
        if (isValid(x)) {
            ans = Math.min(ans, x);
        }
    }

    return ans;   
};