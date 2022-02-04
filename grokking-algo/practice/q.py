
# this one is really cool
def quicksort(arr: list):
    if len(arr) < 2:
        return arr
    else: 
        # it can be anywhere
        pivot = arr[0]

        right = [item for item in arr if item >= pivot]
        left = [item for item in arr if item <= pivot]

        return quicksort(left) + [pivot] + quicksort(right)


a = [22, 1, 45, 20, 2]
print(quicksort(a))
