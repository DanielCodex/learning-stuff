
arr = [10, 1, 2, 4, 7, 9, 0]

def selection_sort(arr: list) -> list:

    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        
        # arr[min_index], arr[i] = arr[i], arr[min_index]
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr


print(selection_sort(arr))