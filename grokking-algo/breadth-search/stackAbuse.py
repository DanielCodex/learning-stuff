from collections import deque


def BFS(adj_list, start_node, target_node):
    visited = set()
    queue = deque()

    # add the start node to the queue and visited
    queue.append(start_node)
    visited.add(start_node)

    # start node doesn't have any parent
    parent = {}
    parent[start_node] = None

    path_found = False
    while len(queue) > 0:
        current_node = queue.popleft()

        if current_node == target_node:
            path_found = True
            break

        for neighbour in adj_list[current_node]:
            if neighbour not in visited:
                visited.add(neighbour)
                parent[neighbour] = current_node
                queue.append(neighbour)

    # print(parent)
    path = []
    if path_found:
        path.append(target_node)
        while parent[target_node] is not None:
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

print(BFS(graph, 1, 6))
