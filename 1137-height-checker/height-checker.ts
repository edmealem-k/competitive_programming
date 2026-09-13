function heightChecker(heights: number[]): number {
    let count = new Array(101).fill(0)

    for (let i = 0; i < heights.length; i++) {
        count[heights[i]]++
    }

    let idx = 0;
    let output = 0; 

    for (let i = 0; i < count.length; i++) {
        while(count[i] != 0) {
            if (heights[idx] != i) {
                output++
            }
            count[i]--;
            idx++;
        }
    }

    return output
};