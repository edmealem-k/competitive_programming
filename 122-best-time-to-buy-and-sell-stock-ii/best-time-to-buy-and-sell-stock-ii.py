class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0

        # Iterate through the prices starting from the scond day
        for i in range(1, len(prices)):
            # If the price today is higher than yesterday, capture the profit
            if prices[i] > prices[i - 1]:
                max_profit += prices[i] - prices[i - 1]

        return max_profit