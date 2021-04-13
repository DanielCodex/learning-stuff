# let's do binary_search again

# we turn array into half and test wather the item we are looking for,
# is on the middle or not
# if it's the middle one, then we are good
# if the guess item is lower then we add the 1 to the lower item
# if the guess item is bigger thenw we decrease value from the last value
# NOTE: we have sorted list in here

# and this is correct
def binary_search(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        guess = arr[mid]

        if guess == item:
            return mid

        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


a = [1, 2, 3, 4, 5]
# print(binary_search(a, 3))


# what kind of if else statement is better
def binary_search_recursion(arr: list, low: int, high: int, item: int) -> int:

    if low < high:
        mid = (low + high) // 2
        guess = arr[mid]

        if guess == item:
            return mid

        if guess > item:
            return binary_search_recursion(arr, low, mid - 1, item)
        else:
            return binary_search_recursion(arr, mid + 1, high, item)
    else:
        return None


print(binary_search_recursion(a, a[0], len(a) - 1, 3))
