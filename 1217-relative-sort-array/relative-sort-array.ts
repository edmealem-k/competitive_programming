function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    // arrays that are found in arr1 but not in arr2
    let ex_arrs : number[] = [] 
    let count: Record<number, number> = {}
    let result : number[] = []

    for (const num of arr2) {
       count[num] = 0;
    }

    for (const num of arr1) {
        if (count[num] >= 0) {
            count[num] += 1
        }
        if (!arr2.includes(num)) {
            ex_arrs.push(num)
        }
    }

    for (const num of arr2) {
        let cnt = count[num];
        while(cnt >= 1) {
            result.push(num)
            cnt -= 1
        }
    }

    return result.concat(ex_arrs.sort((a, b) => a - b));
};