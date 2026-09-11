function applyOperations(nums: number[]): number[] {
    let result:number[] = []
    let count = 0;

    // [1,2,2,1,1,0]
    // count = 0; zeroindx = -1; result = [1, 2];
    // i = 2; 
    for (let i = 0; i < nums.length; i++) {
        if (i < nums.length - 1 && nums[i] === nums[i+1]) {
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
        }

        if (nums[i] === 0) {
            count += 1;
        } else {
            result.push(nums[i])
        }
    }

    while(count > 0) {
        result.push(0)
        count -= 1
    }

    return result;
};