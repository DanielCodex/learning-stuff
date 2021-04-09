

# we print out the position of the array
def binary_search(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1

    while high >= low:
        mid = (low + high) // 2
        guess = arr[mid]

        if guess == item:
            # mid is index in here
            print(f"the pos of item is {mid}")
            return mid

        if guess > item:
            high = mid - 1
        else:
            low = mid + 1

    return None


x = [1, 2, 3, 4, 5]
print(binary_search(x, 4))
