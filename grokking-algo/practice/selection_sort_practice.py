
from tkinter.tix import Select


def selection_sort(arr: list) -> list:
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if arr[min_index] > arr[j]:
                min_index = j

        arr[min_index], arr[i] = arr[i], arr[min_index]

    return arr


a = [5, 1, 8, 4, 0, 2]
print(selection_sort(a))