class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        adj_list = []
        in_degree = []

        for length in range(numCourses):
            adj_list.append([])
            in_degree.append(0)
        
        for course in prerequisites:
            adj_list[course[1]].append(course[0])
            in_degree[course[0]] += 1

        stack = []

        for x in range(len(in_degree)):
            if in_degree[x] == 0:
                stack.append(x)
        
        counter = 0

        while stack:
            current = stack.pop()
            counter += 1

            adjacent = adj_list[current]

            for vertex in adjacent:
                in_degree[vertex] -= 1

                if in_degree[vertex] == 0:
                    stack.append(vertex)

        return counter == numCourses