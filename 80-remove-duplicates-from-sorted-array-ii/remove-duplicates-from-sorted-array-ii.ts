function removeDuplicates(nums: number[]): number {
    let k = 0; // Pointer to track the position of the next valid element

    for (const num of nums) {
        // We always allow the first two elements.
        // For any subsequent element, it's valid only if it's different 
        // from the element placed two positions behind (nums[k - 2]).
        if (k < 2 || num !== nums[k - 2]) {
            nums[k] = num;
            k++;
        }
    }

    return k;    
};