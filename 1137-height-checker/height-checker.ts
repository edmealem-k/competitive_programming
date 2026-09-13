function heightChecker(heights: number[]): number {
    let expected = [...heights].sort((a, b) => a - b)
    let output = 0; 

    console.log(heights)
    console.log(expected)

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            output += 1;
        }
    }

    return output
};