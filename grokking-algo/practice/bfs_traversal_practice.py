from collections import deque
from pyexpat import version_info


# traverse the path
def bfs(graph, root, target_node):
    visited = set()
    queue = deque()

    visited.add(root)
    queue.append(root)

    parent = dict()
    parent[root] = None

    path_found = False
    while len(queue) > 0:
        current_node = queue.popleft()
        
        if target_node == current_node:
            path_found = True
            break
        
        for neighbour in graph[current_node]:
            if neighbour not in visited:
                visited.add(neighbour)
                parent[neighbour] = current_node
                queue.append(neighbour)
    path = []
    if path_found:
        path.append(target_node)
        while parent[target_node] != None:
            path.append(parent[target_node])
            target_node = parent[target_node]
        path.reverse()
    
    return path

graph = {
    1: [2, 3, 4, 5],
    2: [1, 3],
    3: [1, 2, 4, 6],
    4: [1, 3, 5, 6],
    5: [1, 4, 6],
    6: [3, 4, 5]
}
print(bfs(graph, 1, 6))