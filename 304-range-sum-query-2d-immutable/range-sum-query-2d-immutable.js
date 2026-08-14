/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (!matrix ?? matrix.length === 0 ?? matrix[0].length === 0) return;

    const rows = matrix.length
    const cols = matrix[0].length

    // Initialize 2D prefix sum array of size (rows + 1) x (cols + 1) with 0s
    this.sumMat = Array.from({ length: rows + 1}, () => new Array(cols + 1).fill(0));

    for (let r = 0; r < rows; r++) {
        let prefix = 0;
        for (let c = 0; c < cols; c++) {
            prefix += matrix[r][c];
            const above = this.sumMat[r][c + 1];
            this.sumMat[r + 1][c + 1] = prefix + above;
        }
    }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    //  Map 0-indexed query coordinates to 1-indexed prefix sum coordinates
    const r1 = row1 + 1;
    const c1 = col1 + 1;
    const r2 = row2 + 1;
    const c2 = col2 + 1;

    const bottomRight = this.sumMat[r2][c2];
    const above = this.sumMat[r1 - 1][c2];
    const left = this.sumMat[r2][c1 - 1];
    const topLeft = this.sumMat[r1 - 1][c1 - 1];
    
    return bottomRight - above -left + topLeft;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */