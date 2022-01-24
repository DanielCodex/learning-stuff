
# really smart 
def quickSort(arr: list) -> list:
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[0]

        lower = [i for i in arr[1:] if i < pivot]
        higher = [i for i in arr[1:] if i >= pivot]

        return quickSort(lower) + [pivot] + quickSort(higher)


a = [10, 5, 2, 3, 10]
print(quickSort(a))
