

def find_dat_item(arr: list, item: int) -> int:
    """do a binary search

    Args:
        arr (list): sorted array
        item (int): the item we are looking ofor

    Returns:
        int: return the index of the item
    """
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = arr[mid]

        if guess == item:
            return mid

        if guess > item:
            high = mid - 1
        else:
            low = mid + 1

    return None


x = [1, 2, 3, 4, 5, 6]
# print(find_dat_item(x, 5))


def binary_with_recursion(arr: list, low: int, high: int, item: int) -> int:
    low = 0
    high = len(arr) - 1

    if low <= high:
        mid = (low + high) // 2
        guess = arr[mid]

        if guess == item:
            return mid

        if guess > item:
            return binary_with_recursion(arr, low, mid - 1, item)
        else:
            return binary_with_recursion(arr, mid + 1, high, item)

    return None


print(binary_with_recursion(x, 0, len(x), 4))
