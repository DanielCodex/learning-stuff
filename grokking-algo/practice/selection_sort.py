

def selection_sort(arr: list) -> list:
    for i in range(len(arr)):
        min_index = i

        for j in range(i+1, len(arr)):
            if arr[min_index] > arr[j]:

                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr


L = [3, 1, 41, 59, 26, 53, 59]
print(selection_sort(L))
