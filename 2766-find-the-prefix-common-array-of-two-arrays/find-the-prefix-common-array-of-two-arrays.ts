function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const result: number[] = new Array(n);
    const seenCount = new Array(n + 1).fill(0);
    
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        // Increment frequency for current element in A
        seenCount[A[i]]++;
        if (seenCount[A[i]] === 2) {
            commonCount++;
        }

        // Increment frequency for current element in B
        seenCount[B[i]]++;
        if (seenCount[B[i]] === 2) {
            commonCount++;
        }

        // Store current running tally of common elements
        result[i] = commonCount;
    }

    return result;
}
