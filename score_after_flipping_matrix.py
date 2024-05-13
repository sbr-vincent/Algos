class Solution:
    # O(n * m) Space and Time
    def matrixScore(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        # Flip rows
        for r in range(ROWS):
            if grid[r][0] == 0:
                for c in range(COLS):
                    grid[r][c] = 0 if grid[r][c] else 1

        # Flip cols
        for c in range(COLS):
            one_count = 0
            for r in range(ROWS):
                one_count += grid[r][c]
            if one_count < ROWS - one_count:
                for r in range(ROWS):
                    grid[r][c] = 0 if grid[r][c] else 1

        res = 0
        for r in range(ROWS):
            for c in range(COLS):
                res += grid[r][c] << (COLS - c - 1)
        
        return res