class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        # prices 1,3,4,2
        # money 3
        # [1, 2] -> leftover = 0 without going -ve

        # prices 3, 2, 3
        # money 3
        # we can buy two chocolates without going to dubt, so we wont buy
        # and return the money
        leftover = 0
        bought = False


        #  prices = [3,2,3]
        #  money = 3
        #  expected output = 0
        #  i = 2, diff = money - prices[i] = 3 - 3 = 0
        #  j = 1, diff >= prices[j]
        for i in range(len(prices)):
            diff = money - prices[i]

            for j in range(i + 1, len(prices)):
                if (diff >= prices[j]):
                    leftover = max(leftover, diff - prices[j])
                    bought = True
        
        return leftover if bought else money
