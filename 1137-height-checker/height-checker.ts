function heightChecker(heights: number[]): number {
    let count = new Array(101).fill(0)

    for (let i = 0; i < heights.length; i++) {
        count[heights[i]]++
    }

    let idx = 0;
    let output = 0; 
    let expected: number[] = []

    for (let i = 0; i < count.length; i++) {
        while(count[i] != 0) {
            // if (heights[idx] != i) {
            //     output++
            // }
            expected.push(i)
            count[i]--;
            idx++;
        }
    }

    for (let i = 0; i < heights.length; i++) {
        if (expected[i] !== heights[i]) {
            output++
        }
    }

    return output
};