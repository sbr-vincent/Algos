class Solution:
    # Bellman-Ford solution 
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        distances = []

        for length in range(n):
            distances.append(float('inf'))
        
        distances[k - 1] = 0
        
        for i in range(n - 1):
            count = 0

            for time in times:
                source = time[0]
                target = time[1]
                weight = time[2]

                if distances[source - 1] + weight < distances[target - 1]:
                    distances[target - 1] = distances[source - 1] + weight
                    count += 1
            
            if count == 0:
                break

        return -1 if max(distances) == float('inf') else max(distances)