

def selection_sort(arr: list) -> list:
    for i in range(0, len(arr)):
        # we assume this
        min_index = i

        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j

        arr[min_index], arr[i] = arr[i], arr[min_index]

    return arr


a = [
    5, 2, 1, 1, 4,
    7, 5, 4, 9, 1
]
# print(selection_sort(a))


def swap_two(a: int, b: int) -> tuple:
    a = a ^ b

    b = a ^ b

    a = a ^ b
    return a, b


# b = [1, 2]
# print(swap_two(b[0], b[1]))


def practice(arr: list) -> list:
    for i in range(0, len(arr)):
        min_index = i

        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j

    swap_two(arr[i], arr[min_index])

    return arr


print(practice(a))
