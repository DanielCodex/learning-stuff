from collections import deque

def traversal(graph, start_node): 
    visited = set()
    queue = deque()

    queue.append(start_node)
    visited.add(start_node)

    while len(queue) > 0:
        current_node = queue.popleft()
        print(current_node, end=" ")
        for neighbour in graph[current_node]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)


graph = {
    1 : [2, 3],
    2 : [1, 3, 5],
    3 : [1, 2, 4],
    4 : [3],
    5 : [2]
}
print(traversal(graph, 1))