
# this one is really cool
def quicksort(arr: list):
    if len(arr) < 2:
        return arr
    else:
        pivot = arr[0]

        lower = [i for i in arr[1:] if i <= pivot]
        higher = [i for i in arr[1:] if i > pivot]

        return quicksort(lower) + [pivot] + quicksort(higher)


a = [22, 1, 45, 20, 2]
print(quicksort(a))
