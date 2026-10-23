function largestGoodInteger(num: string): string {
    // Start from the largest digit '9' and go down to '0'
    for (let i = 9; i >= 0; i--) {
        const triplet = String(i).repeat(3);
        
        // If the string includes this triplet, it's the largest one
        if (num.includes(triplet)) {
            return triplet;
        }
    }
    
    // Return empty string if no 3-same-digit number is found
    return "";  
};