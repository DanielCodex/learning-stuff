# from :point_down:
# https://stackabuse.com/graphs-in-python-breadth-first-search-bfs-algorithm/

from queue import Queue


graph = {
    1: [2, 3, 4, 5],
    2: [1, 3],
    3: [1, 2, 4, 6],
    4: [1, 3, 5, 6],
    5: [1, 4, 6],
    6: [3, 4, 5]
}


def BFS(adj_list: dict, start_node: int, target_node: int) -> list:

    visited = set()
    queue = Queue()

    visited.add(start_node)
    queue.put(start_node)

    # i am going to find out more about this
    parent = dict()
    parent[start_node] = None

    path_found = False
    while not queue.empty():
        # print(f"parent={parent}")
        current_node = queue.get()
        if current_node == target_node:
            path_found = True
            # print('we found the target')
            return

        for next_node in adj_list[current_node]:
            if next_node not in visited:
                queue.put(next_node)
                parent[next_node] = current_node
                visited.add(next_node)

    path = []
    if path_found:
        path.append(target_node)
        while parent[target_node] is not None:
            path.append(parent[target_node])
            target_node = parent[target_node]
        path.reverse()
    print(type(path))
    return path


print(BFS(graph, 1, 6))
print('danil')
# print(path)
