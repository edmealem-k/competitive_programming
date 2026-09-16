function isPathCrossing(path: string): boolean {
    let visited = new Set<string>()
    visited.add('0,0')

    let x = 0;
    let y = 0;

    for (const char of path) {
        if (char === "N") {
            y++;
        } else if (char === "S") {
            y--;
        } else if (char === "E") {
            x++;
        } else {
            x--;
        }

        if (visited.has(`${x},${y}`)) return true;
        else visited.add(`${x},${y}`);
    }

    return false
};

