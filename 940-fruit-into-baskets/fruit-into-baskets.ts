function totalFruit(fruits: number[]): number {
    let count = new Map<number, number>();
    let leftptr = 0;
    let max = 0

    // fruits = [1,2,1,3,2,2,1,1,0,0]
    // [[1,2],[2,1],[3,1]]
    // count = [[1, 4],[2,3],[0,2]]
    // leftpointer = 0
    // max fruit = 0
    for (let i = 0; i < fruits.length; i++) {
        count.set(fruits[i], (count.get(fruits[i]) || 0) + 1);

        while(count.size > 2) {
            let leftFruit = fruits[leftptr];

            count.set(leftFruit, count.get(leftFruit) - 1)

            if (count.get(leftFruit) === 0) {
                count.delete(leftFruit)
            }

            leftptr++
        }

        max = Math.max(max, i - leftptr + 1)
    }

    return max;
};











    // let basket = new Map<number, number>();
    // let left = 0;
    // let maxFruits = 0;

    // for (let right = 0; right < fruits.length; right++) {
    //     let currentFruit = fruits[right];
    //     basket.set(currentFruit, (basket.get(currentFruit) || 0) + 1);

    //     // If we have more than 2 types of fruit, shrink the window from the left
    //     while (basket.size > 2) {
    //         let leftFruit = fruits[left];
    //         basket.set(leftFruit, basket.get(leftFruit)! - 1);
    //         if (basket.get(leftFruit) === 0) {
    //             basket.delete(leftFruit);
    //         }
    //         left++;
    //     }

    //     // Update the maximum number of fruits collected
    //     maxFruits = Math.max(maxFruits, right - left + 1);
    // }

    // return maxFruits;