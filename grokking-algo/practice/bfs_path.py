from collections import deque

def bfs(graph, root):
    visited = set()
    queue = deque()

    visited.add(root)
    queue.append(root)
    print(queue)

    while queue:
        current_node = queue.popleft()
        print(f"{current_node}", end=" ")

        for neighbour in graph[current_node]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)


graph = {
    1: [2, 3, 4, 5],
    2: [1, 3],
    3: [1, 2, 4, 6],
    4: [1, 3, 5, 6],
    5: [1, 4, 6],
    6: [3, 4, 5]
}
print(bfs(graph, 1))
# print(bfs(graph, 1, 6))