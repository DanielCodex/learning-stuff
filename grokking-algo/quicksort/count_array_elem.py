

def count_array_item(arr: list) -> int:
    """output is the lenght of the array but using recurion

    Args:
        arr (list): array of number (sorted or unsorted is find)

    Returns:
        int: length of array
    """
    if len(arr) == 0:
        return 0
    else:
        return 1 + count_array_item(arr[1:])


print(count_array_item([1, 2, 3]))
print(len([1, 2, 3]))
