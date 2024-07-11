class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        # Top Down approach
        n = len(cost)
        memo = [None] * n

        return min(self.minCost(n - 1, cost, memo), self.minCost(n - 2, cost, memo))

    def minCost(self, i, cost, memo):
        if i < 0: return 0

        if i == 0 or i == 1:
            return cost[i]

        if memo[i] != None:
            return memo[i]
        
        memo[i] = cost[i] + min(self.minCost(i - 1, cost, memo), self.minCost(i - 2, cost, memo))

        return memo[i]