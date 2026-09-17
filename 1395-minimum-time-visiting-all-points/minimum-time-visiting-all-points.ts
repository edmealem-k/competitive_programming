function minTimeToVisitAllPoints(points: number[][]): number {
    let ans = 0;

    for (let i = 0; i < points.length -1; i++) {
        let [x, y] = points[i];
        let [tarX, tarY] = points[i + 1]

        ans += Math.max(Math.abs(tarX - x), Math.abs(tarY - y))
    }

    return ans
};