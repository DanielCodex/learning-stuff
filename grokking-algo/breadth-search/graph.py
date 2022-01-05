from collections import deque

graph = {}
graph["daniel"] = ['shahin', 'mina']

search_queue = deque()
search_queue += graph['daniel']
person = search_queue.popleft()
print(person)
