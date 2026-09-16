function numSpecial(mat: number[][]): number {
    let rl = mat.length;
    let cl = mat[0].length;

    let row = new Array(rl).fill(0);
    let col = new Array(cl).fill(0);

    for (let i = 0; i < rl; i++) {
        for (let j = 0; j < cl; j++) {
            if (mat[i][j] === 1) {
                row[i]++;
                col[j]++;
            }
        }
    }

    let ans = 0;
    for (let i = 0; i < rl; i++) {
        for (let j = 0; j < cl; j++) {
            if (mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
                ans++;
            }
        }
    }

    return ans;
};


























    // const m = mat.length;
    // const n = mat[0].length;
    // let row: number[] = new Array(m).fill(0);
    // let col: number[] = new Array(n).fill(0)

    // for (let i = 0; i < m; i++) {
    //     for (let j = 0; j < n; j++) {
    //         if (mat[i][j] === 1) {
    //             row[i] += 1
    //             col[j] += 1
    //         }
    //     }
    // }

    // let ans = 0;
    // for (let i = 0; i < m; i++) {
    //     for (let j=0; j < n; j++) {
    //         if (mat[i][j] === 1 && row[i] === 1 && col[j] === 1) {
    //             ans++;
    //         }
    //     }
    // }

    // return ans;