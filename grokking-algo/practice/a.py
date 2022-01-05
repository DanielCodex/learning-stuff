
# 5.1.2022
def binary_search(arr: list, item: int):
    low = 0
    high = len(arr) - 1

    while low <= high:
        middle = (low + high)//2
        guess = arr[middle]

        if guess == item:
            return middle

        if guess > item:
            high = middle - 1
        else:
            low = middle + 1

    return None


a = [1, 2, 3, 4]


def bin_recursion(arr: list, item: int, high: int, low: int) -> int:
    if high >= low:
        middle = (high + low) // 2
        guess = arr[middle]

        if guess == item:
            return middle

        if guess > item:
            return bin_recursion(arr, item, middle - 1, low)
        else:
            return bin_recursion(arr, item, high, middle + 1)
    else:
        return -1


# way slower
print(bin_recursion(a, 2, len(a) - 1, 0))
