class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        if not grid:
            return 0
        
        directions = [[-1,0],[0, 1],[1,0],[0,-1]]
        ROTTEN = 2
        FRESH = 1
        EMPTY = 0

        queue = []
        fresh_oranges = 0

        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] ==  ROTTEN:
                    queue.append([row, col])
                
                if grid[row][col] ==  FRESH:
                    fresh_oranges += 1
        
        current_queue_size = len(queue)
        minutes = 0

        while queue:
            if current_queue_size == 0:
                minutes += 1
                current_queue_size = len(queue)
            
            current_orange = queue.pop(0)
            current_queue_size -= 1
            row = current_orange[0]
            col = current_orange[1]

            for direction in directions:
                current_dir = direction
                next_row = row + current_dir[0]
                next_col = col + current_dir[1]

                if next_row < 0 or next_row >= len(grid) or next_col < 0 or next_col >= len(grid[0]):
                    continue
                
                if grid[next_row][next_col] == FRESH:
                    grid[next_row][next_col] = 2
                    fresh_oranges  -= 1
                    queue.append([next_row, next_col])

        return -1 if fresh_oranges > 0 else minutes