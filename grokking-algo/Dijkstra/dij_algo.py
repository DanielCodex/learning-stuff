import math

INFINITY = math.inf

# won't return shortest pathj
def dijkstrasAlgorithm(start, edges):
    numberOfVertices = len(edges)

    minDistances = [float('inf') for _ in range(numberOfVertices)]
    minDistances[start] = 0

    visited = set()
    # beacuse we add to visited 
    while len(visited) != numberOfVertices:
        vertex, currentMinDistance = getVertexWithMinDistance(minDistances, visited)

        if currentMinDistance == float('inf'):
            break

        visited.add(vertex)

        for edge in edges[vertex]: # edge = [1, 7] from 0 to 1 with weight of 7 i.e
            destination, distanceToDestination = edge 

            if destination in visited:
                continue 

            newPathDistance = currentMinDistance + distanceToDestination
            currentDestinationDistance = minDistances[destination]
            if newPathDistance < currentDestinationDistance:
                minDistances[destination] = newPathDistance




def getVertexWithMinDistance(distances, visited):
    currentMinDistance = float('inf')
    vertex = None

    for vertexIdx, distance in enumerate(distances):
        if vertexIdx in visited:
            continue
        
        # <= because one of the node can be not connected to any 
        # of other node, so we want to return that (with inf) which 
        # shows that there is no path from that node. to anywhere
        if distance <= currentMinDistance:
            vertex = vertexIdx
            currentMinDistance = distance
    
    return vertex, currentMinDistance



a = [1,2,3,4,5]
print(dijkstrasAlgorithm(1, a))