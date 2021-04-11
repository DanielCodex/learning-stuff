
def selection_sort(arr: list) -> list:
    for i in range(0, len(arr)):

        min_element = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_element]:
                min_element = j

        # tmp = arr[i]
        # arr[i] = arr[min_element]
        # arr[min_element] = tmp
        arr[i], arr[min_element] = arr[min_element], arr[i]
    return arr


# print(y.pop(1))
# print(y)

# print(selection_sort(y))
# print(y.pop(1))


def find_smallest_index(arr: list) -> list:
    smallest_item = arr[0]  # we assume
    smallest_index = 0
    for i in range(1, len(arr)):
        if arr[i] < smallest_item:
            smallest_item = arr[i]
            smallest_index = i
    return smallest_index


y = [3, 2, 1, 51, 59, 1,  26, 53, 59, 1]
print(find_smallest_index(y))
