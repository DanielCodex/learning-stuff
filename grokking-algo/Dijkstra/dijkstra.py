import math

# ------------------------------- neighbour hashtable ------------------------------ #
graph = {}
graph["start"] = {}
graph["start"]["a"] = 6  # weight
graph["start"]["b"] = 2  # weight

graph["a"] = {}
graph["a"]["fin"] = 1  # weight

graph["b"] = {}
graph["b"]["a"] = 3   # weight
graph["b"]["fin"] = 5  # weight

graph["fin"] = {}
# print(graph.keys())

# ------------------------------ cost hashtable ------------------------------ #
infinity = math.inf  # when we don't know the cost
costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

# ----------------------------- parents hashtable ---------------------------- #
parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = None

# keep track of all nodes you were there
processed = []

def find_lowest_cost_node(costs):
    lowest_cost = math.inf
    lowest_cost_node = None
    for node in costs:
        cost = costs[node]
        if cost < lowest_cost and node not in processed:
            lowest_cost = cost
            lowest_cost_node = node
    return lowest_cost_node

node = find_lowest_cost_node(costs)

while node is not None:
    cost = costs[node]
    neighbour = graph[node]
    for n in neighbour.keys():
        new_cost = cost + neighbour[n]
        if costs[n] > new_cost:
            costs[n] = new_cost
            parents[n] = node
    processed.append(node)
    node = find_lowest_cost_node(costs)


