from collections import deque
import queue

tree = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F', "G"],
    'D': [],
    'E': [],
    'F': [],
    "G": []
}


# why nothing is working
def bfs(tree: dict, rootNode: int, searchValue: str) -> str:
    queue_list = deque()
    pass
