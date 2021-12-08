

def binary_search(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high)//2
        guess = arr[mid]  # middle one

        if guess == item:
            return mid

        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
print(binary_search(a, 8))
