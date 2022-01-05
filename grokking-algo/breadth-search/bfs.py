
tree = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', "G"],
    'D': [],
    'E': [],
    'F': [],
    "G": []
}


def bfs(tree: dict, rootNode: int, searchValue: str) -> str:
    queue = []
    # start the search from the right spot
    queue.append(rootNode)

    while len(queue) > 0:
        current_node = queue[0]

        if current_node == searchValue:
            print("we found it")
            return

        if len(current_node) != 0:
            queue.append(tree)
