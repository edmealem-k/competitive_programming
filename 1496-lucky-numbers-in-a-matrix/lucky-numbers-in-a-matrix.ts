function luckyNumbers(matrix: number[][]): number[] {
    let rl = matrix.length;
    let cl = matrix[0].length;

    let rowMin = new Array(rl).fill(Infinity);
    let colMax = new Array(cl).fill(-Infinity);

    for (let i = 0; i < rl; i++) {
        for (let j = 0; j < cl; j++) {
            rowMin[i] = Math.min(rowMin[i], matrix[i][j]);
            colMax[j] = Math.max(colMax[j], matrix[i][j]);
        }
    }

    let ans: number[] = [];
    for (let i = 0; i < rl; i++) {
        for (let j = 0; j < cl; j++) {
            if (matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]) {
                ans.push(matrix[i][j]);
            }
        }
    }

    return ans;
};




















    // let rl = matrix.length;
    // let cl = matrix[0].length; 

    // let rowMin = new Array(rl).fill(Infinity)
    // let colMax = new Array(cl).fill(-Infinity)

    // for (let i = 0; i < rl; i++) {
    //     for (let j = 0; j < cl; j++) {
    //         rowMin[i] = Math.min(rowMin[i], matrix[i][j])
    //         colMax[j] = Math.max(colMax[j], matrix[i][j])
    //     }
    // }

    // let ans = [];

    // for (let i = 0; i < rl; i++) {
    //     for (let j = 0; j < cl; j++) {
    //         if (matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]) {
    //             ans.push(matrix[i][j])
    //         }
    //     }
    // }

    // return ans;