WALL = -1
GATE = 0
EMPTY = float("-inf")
directions = [[-1,0],[0, 1],[1,0],[0,-1]]

class Solution:
    def wallsAndGates(self, grid: List[List[int]]) -> List[List[int]]:
        # O(N)
        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == GATE:
                    self.dfs(grid, row, col, 0)
        
        return grid

    def dfs(self, grid, row, col, curr_step):
        # O(N)
        if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or curr_step > grid[row][col]:
            return 
        
        grid[row][col] = curr_step

        for direction in directions:
            self.dfs(grid, row + direction[0], col + direction[1], curr_step += 1)

    # T: O(N) S:O(N)
