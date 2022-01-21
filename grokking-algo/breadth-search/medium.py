from collections import defaultdict

a = defaultdict(int)

def generate_adjacency_list(edges):
    adjcency_list = defaultdict(list)
    for u, v in edges:
        adjcency_list[u].append(v)
        adjcency_list[v].append(u)

    return adjcency_list


edges = [['A', 'B'], ['A', 'C'], ['B', 'D'], ['B', 'E'], ['C', 'F'], ['C', 'G'], ['D', 'H'], ['D', 'I'], ['E', 'J'], ['E', 'K'], ['F', 'L'], ['F', 'M']]
adjacencyList = generate_adjacency_list(edges)
print(adjacencyList)
# print(dict(generate_adjacency_list(edges)))
