from random import randint, sample
from types import new_class


# res = []
# for _ in range(10):
#     value = randint(0, 10)
#     res.append(value)

# print(list(set(res)))

arr = [10, 1, 2, 4, 7, 9, 0]


def find_smallest_index(arr: list) -> int:
    smallest = arr[0]
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index


def selection_sort(arr: list) -> list:
    res = []
    for i in range(len(arr)):
        res.append(arr.pop(find_smallest_index(arr)))

    return res


print(selection_sort(arr))
