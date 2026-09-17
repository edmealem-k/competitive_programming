function luckyNumbers(matrix: number[][]): number[] {
    let rl = matrix.length;
    let cl = matrix[0].length; 

    let row = new Array(rl).fill(Infinity)
    let col = new Array(cl).fill(-Infinity)

    for (let i = 0; i < rl; i++) {
        for (let j = 0; j < cl; j++) {
            row[i] = Math.min(row[i], matrix[i][j])
            col[j] = Math.max(col[j], matrix[i][j])
        }
    }

    let ans = [];

    for (let i = 0; i < rl; i++) {
        for (let j = 0; j < cl; j++) {
            if (matrix[i][j] === row[i] && matrix[i][j] === col[j]) {
                ans.push(matrix[i][j])
            }
        }
    }

    return ans;
};