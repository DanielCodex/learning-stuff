from collections import deque
from tabnanny import check

# i understand the whole idea,
# here the code i.e

graph = {}
graph["you"] = ['mina', 'shahin', 'musk', "lex fridman"]


def person_is_seller(name):
    return name[-1] == "m"


def search(name):
    search_queue = deque()
    search_queue += graph["you"]
    checked = []
    while search_queue:
        person = search_queue.popleft()
        if not person in checked:
            if person_is_seller(person):
                print(f"here is our guy {person}")
                return True
            else:
                # add his friend
                search_queue += graph[person]
                # also checked so we don't serach it again
                checked.append(person)

    # we didn't find anyone
    return False


b = [1, 2, 3, 4, 5]
print(b[:-1])
