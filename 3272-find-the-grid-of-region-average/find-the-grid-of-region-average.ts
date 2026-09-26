function resultGrid(image: number[][], threshold: number): number[][] {
    const m = image.length;
    const n = image[0].length;
    
    // Track the sum of region floor-averages and count of regions for each pixel
    const regionSums: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    const regionCounts: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Helper function to check if a 3x3 subgrid starting at (r, c) is a valid region
    function isValidRegion(r: number, c: number): boolean {
        // Check horizontal differences
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 2; j++) {
                if (Math.abs(image[i][j] - image[i][j + 1]) > threshold) return false;
            }
        }
        // Check vertical differences
        for (let i = r; i < r + 2; i++) {
            for (let j = c; j < c + 3; j++) {
                if (Math.abs(image[i][j] - image[i + 1][j]) > threshold) return false;
            }
        }
        return true;
    }
    
    // Helper function to calculate the floor average of a 3x3 subgrid
    function getRegionAverage(r: number, c: number): number {
        let sum = 0;
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                sum += image[i][j];
            }
        }
        return Math.floor(sum / 9);
    }
    
    // Traverse all 3x3 subgrids
    for (let i = 0; i <= m - 3; i++) {
        for (let j = 0; j <= n - 3; j++) {
            if (isValidRegion(i, j)) {
                const avg = getRegionAverage(i, j);
                for (let r = i; r < i + 3; r++) {
                    for (let c = j; c < j + 3; c++) {
                        regionSums[r][c] += avg;
                        regionCounts[r][c] += 1;
                    }
                }
            }
        }
    }
    
    // Build the final result grid
    const result: number[][] = Array.from({ length: m }, (_, i) => 
        Array.from({ length: n }, (_, j) => {
            if (regionCounts[i][j] > 0) {
                return Math.floor(regionSums[i][j] / regionCounts[i][j]);
            } else {
                return image[i][j];
            }
        })
    );
    
    return result;
}
