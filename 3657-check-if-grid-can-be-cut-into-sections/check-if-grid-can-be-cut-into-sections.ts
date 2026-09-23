function checkValidCuts(n: number, rectangles: number[][]): boolean {
    function canCut(intervals: [number, number][]): boolean {
        // Sort intervals by start coordinate
    // xIntervals = [[1,5],[0,2],[3,5],[0,4]]
    // => [[0,2],[0,4],[1,5],[3,5]]
        intervals.sort((a, b) => a[0] - b[0]); // a[0] - b[0] -> 1 ->(xint[0][0]) - 0 -> (xint[1][0])
        
        let count = 0;
        let farthestEnd = intervals[0][1]; // => 2 
        
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= farthestEnd) {
                // Found a valid separation point
                count++;
                farthestEnd = intervals[i][1];
            } else {
                farthestEnd = Math.max(farthestEnd, intervals[i][1]);
            }
        }
        
        // If we found at least 2 cuts, we get 3 or more sections
        return count >= 2;
    }

    // Input: n = 5, rectangles = [[1,0,5,2],[0,2,2,4],[3,2,5,3],[0,4,4,5]]
    // Output: true
    // xIntervals = [[1,5],[0,2],[3,5],[0,4]]
    // yIntervals = [[0,5],[2,4],[2,3],[4,5]]
    const xIntervals: [number, number][] = rectangles.map(r => [r[0], r[2]]);
    const yIntervals: [number, number][] = rectangles.map(r => [r[1], r[3]]);

    return canCut(xIntervals) || canCut(yIntervals);  
};