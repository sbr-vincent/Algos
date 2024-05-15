class Solution:
    def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
        R= len(grid)
        C = R
        INF = 10 ** 20

        q = collections.deque()
        dist = [[INF] * C for _ in range(R)]

        for x in range(R):
            for y in range(C):
                if grid[x][y] == 1:
                    q.append((0, x, y))
                    dist[x][y] = 0

        directions = [(1,0), (0,1), (-1,0), (0,-1)]

        while len(q) > 0:
            d, x, y = q.popleft()

            for dx, dy in directions:
                nx,ny = x + dx, y + dy

                if 0 <= nx < R and 0 <= ny < C and dist[nx][ny] > dist[x][y] + 1:
                    dist[nx][ny] = dist[x][y] + 1
                    q.append((dist[nx][ny], nx, ny))
        
        def good(target):
            q = collections.deque()
            seen = [[False] * C for _ in range(R)]
            if dist[0][0] >= target:
                q.append((0,0))
                seen[0][0] = True

            while len(q)> 0:
                x, y = q.popleft()

                if (x,y) == (R - 1, C - 1):
                    return True

                for dx, dy in directions:
                    nx, ny = x + dx, y + dy

                    if 0 <= nx < R and 0 <= ny < C and dist[nx][ny] >= target and not seen[nx][ny]:
                        seen[nx][ny] = True
                        q.append((nx, ny))
            return False

        left = 0
        right = R

        while left < right:
            mid = (left + right + 1) // 2

            if good(mid):
                left = mid
            else:
                right = mid - 1
        return left
