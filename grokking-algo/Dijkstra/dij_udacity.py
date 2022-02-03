# source
# https://www.udacity.com/blog/2021/10/implementing-dijkstras-algorithm-in-python.html
import sys

class Graph(object):
    def __init__(self, nodes, init_graph):
        self.nodes = nodes

    def construct_graph(self, nodes, init_graph):
        graph = {}
        for node in nodes:
            graph[node] = {}
        
        graph.update(init_graph)

        for node, edges in graph.items():
            for adjacent_node, value in edges.items():
                if graph[adjacent_node].get(node, False) == False:
                    graph[adjacent_node][node] = value

a = {"age":22, "name": "daniel"}
print(a.get("age", False))