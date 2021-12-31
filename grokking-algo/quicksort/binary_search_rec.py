
def binary_search_rec(arr: list, item: int, low: int, high: int):
    if high >= low:
        middle = (low + high) // 2
        guess = arr[middle]

        if guess == item:
            return middle

        if guess > item:
            return binary_search_rec(arr, item, low, middle - 1)
        else:
            return binary_search_rec(arr, item, low+1, middle)

    else:
        # we didn't find it
        return -1


a = [1, 2, 3]
print(binary_search_rec(a, 2, 0, len(a)))
