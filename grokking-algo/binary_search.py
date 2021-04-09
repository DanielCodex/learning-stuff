
def binary_search(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high)//2
        guess = arr[mid]

        if guess == item:
            return guess

        if guess > item:
            high = mid - 1

        else:
            low = mid + 1
    return None


def binary_recursive(arr: list, low: int, high: int, item: int) -> int:
    if high >= low:
        mid = (high + low) // 2
        guess = arr[mid]

        if item == guess:
            return item

        elif guess > item:
            return binary_recursive(arr, low, mid - 1, item)
        else:
            return binary_recursive(arr, mid + 1, high, item)

    return None


x = [1, 2, 3, 4, 5]
print(binary_recursive(x, 0, len(x), 5))
