class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        adj_list = []

        for length in range(len(manager)):
            adj_list.append([])

        for idx, employee in enumerate(manager):
            print(idx, employee)
            if employee == (-1):
                continue

            adj_list[employee].append(idx)


        return self.dfs(headID, adj_list, informTime)
    
    def dfs(self, currentID, adj_list, informTime):
        if len(adj_list[currentID]) == 0:
            return 0 
        
        max_time = 0
        subordinates = adj_list[currentID]
        for subordinate in subordinates:
            max_time = max(max_time, self.dfs(subordinate, adj_list, informTime))

        return max_time + informTime[currentID]