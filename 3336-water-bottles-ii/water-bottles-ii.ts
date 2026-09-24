function maxBottlesDrunk(numBottles: number, numExchange: number): number {
    let ans = numBottles;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        // Exchange numExchange empty bottles for 1 full bottle
        emptyBottles -= numExchange;
        // Increase the exchange rate for the next operation
        numExchange += 1;
        // Drink the new full bottle
        ans += 1;
        // The newly drunk bottle becomes an empty bottle
        emptyBottles += 1;
    }

    return ans;
};