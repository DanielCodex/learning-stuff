
def binary_search(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1

    while low <= high:
        middle = (low + high) // 2
        guess = arr[middle]

        if guess == item:
            return middle  # you have to return the index not the item

        if guess > item:
            high = middle - 1
        else:
            low = middle + 1

    return None


array = [0, 1, 2, 3, 4, 5, 6]

# print(binary_search(array, 2))


def binary_search_again(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1

    # u have to say <= because it's get to the point when
    # when the low is the high and that's when have found
    # the answer
    while low <= high:
        mid = (low + high)//2
        guess = arr[mid]

        if guess == item:
            # return the index not the item
            return mid

        if guess > item:
            # means that item is on the lower side
            # so we are going to update the high
            high = mid - 1
        else:
            low = mid + 1

    return None


print(binary_search_again(array, 2))
