
def quicksort(arr: list) -> list:
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[0]

        # i think one of this should be >= or <=
        # because we want to see the duplicate also
        lower = [i for i in arr[1:] if i < pivot]
        higher = [i for i in arr[1:] if i >= pivot]

        return quicksort(lower) + [pivot] + quicksort(higher)


a = [10, 5, 2, 3, 10]
print(quicksort(a))
