class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        directions = [[-1,0],[0,1],[1,0],[0,-1]]
        island_count = 0

        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == "1":
                    island_count += 1
                    grid[row][col] = "0"

                    queue = []
                    queue.append([row,col])

                    while queue:
                        current_pos = queue.pop(0)
                        curr_row = current_pos[0]
                        curr_col = current_pos[1]

                        for direction in directions:
                            next_row = curr_row + direction[0]
                            next_col = curr_col + direction[1]

                            if next_row < 0 or next_row >= len(grid) or next_col < 0 or next_col >= len(grid[0]):
                                continue
                            
                            if grid[next_row][next_col] == "1":
                                queue.append([next_row, next_col])
                                grid[next_row][next_col] = "0"
        
        return island_count