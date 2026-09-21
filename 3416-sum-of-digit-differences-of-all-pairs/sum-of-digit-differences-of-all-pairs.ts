function sumDigitDifferences(nums: number[]): number {
    const n = nums.length;
    const len = String(nums[0]).length;
    let total = 0;
    let place = 1;

    for (let i = 0; i < len; i++) {
        const counts: number[] = new Array(10).fill(0);
        
        for (const num of nums) {
            const digit = Math.floor(num / place) % 10;
            counts[digit]++;
        }
        
        // For each digit, pairs with different digits equal count * (n - count)
        // Summing this up for all digits gives double the total differences for this position
        let posPairs = 0;
        for (let d = 0; d < 10; d++) {
            posPairs += counts[d] * (n - counts[d]);
        }
        
        total += posPairs / 2;
        place *= 10;
    }

    return total;
};