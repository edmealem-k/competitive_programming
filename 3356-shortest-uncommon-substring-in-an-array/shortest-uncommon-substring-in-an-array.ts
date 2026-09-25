function shortestSubstrings(arr: string[]): string[] {
    const n = arr.length;
    const ans: string[] = new Array(n).fill("");
    
    // 1. Precompute all unique substrings belonging to each string
    const stringSubsets: Set<string>[] = [];
    for (let i = 0; i < n; i++) {
        const subsets = new Set<string>();
        const s = arr[i];
        const len = s.length;
        
        for (let start = 0; start < len; start++) {
            for (let end = start + 1; end <= len; end++) {
                subsets.add(s.substring(start, end));
            }
        }
        stringSubsets.push(subsets);
    }

    // 2. For each string, evaluate its substrings to find the shortest uncommon one
    for (let i = 0; i < n; i++) {
        let bestSub = "";

        for (const sub of stringSubsets[i]) {
            // Check if this substring exists in any OTHER string's subset
            let isUncommon = true;
            for (let j = 0; j < n; j++) {
                if (i === j) continue;
                if (stringSubsets[j].has(sub)) {
                    isUncommon = false;
                    break;
                }
            }

            // If it's uncommon, evaluate it against the current best candidate
            if (isUncommon) {
                if (bestSub === "") {
                    bestSub = sub;
                } else if (sub.length < bestSub.length) {
                    bestSub = sub;
                } else if (sub.length === bestSub.length && sub < bestSub) {
                    bestSub = sub;
                }
            }
        }
        ans[i] = bestSub;
    }

    return ans; 
};