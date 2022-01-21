# https://www.educative.io/edpresso/how-to-implement-a-breadth-first-search-in-python
# idk why he/she put hte visited and queue outside of the function ?


# graph = {
#   'A' : ['B','C'],
#   'B' : ['D', 'E'],
#   'C' : ['F'],
#   'D' : [],
#   'E' : ['F'],
#   'F' : []
# }

graph = {
    '1': ['2', '3'],
    '2': ['1', '3', '5'],
    '3': ['1', '2', '4'],
    '4': ['3'],
    '5': ['2']
}
print(graph['1'])

# is there path from A to X?
# what is the shortest path from A to X?
# this are the asnwer we get from BFS right?!


def bfs(graph, start_node):
    visited_set = []
    queue = []
    visited_set.append(start_node)
    queue.append(start_node)

    result = []
    while len(queue) > 0:
        current = queue.pop(0)
        result.append(current)
        print(current)
        # queue = queue[1:] why though
        for neighbour in graph[current]:
            if neighbour not in visited_set:
                visited_set.append(neighbour)
                queue.append(neighbour)
    return result


print(bfs(graph, '1'))
