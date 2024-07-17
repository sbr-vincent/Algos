class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        smallest_set = set()
        vertices = []

        for edge in edges:
            smallest_set.add(edge[1])
        
        for vertex in range(0, n):
            if vertex not in smallest_set:
                vertices.append(vertex)
        
        return vertices