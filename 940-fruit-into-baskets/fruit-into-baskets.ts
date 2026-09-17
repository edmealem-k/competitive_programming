function totalFruit(fruits: number[]): number {
    const count = new Map<number, number>();
    let left = 0;
    let maxFruits = 0;

    for (let right = 0; right < fruits.length; right++) {
        // Add the current fruit to the map
        count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);

        // If we have more than 2 types of fruit, shrink the window from the left
        while (count.size > 2) {
            const leftFruit = fruits[left];
            count.set(leftFruit, count.get(leftFruit)! - 1);
            
            if (count.get(leftFruit) === 0) {
                count.delete(leftFruit);
            }
            left++; // Move the left pointer forward
        }

        // Calculate the maximum window size seen so far
        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
};