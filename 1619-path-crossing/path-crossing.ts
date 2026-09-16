function isPathCrossing(path: string): boolean {
    let visited = new Set<string>()
    visited.add("0,0")
    let x = 0;
    let y = 0;

    for (const char of path) {
        switch(char) {
            case "N": y++; break;
            case "S": y--; break;
            case "E": x++; break;
            case "W":  x--; break;
        }

        if (visited.has(`${x},${y}`)) {
            return true;
        } else {
            visited.add(`${x},${y}`)
        }
    }

    return false;
};