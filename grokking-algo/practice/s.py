
def selection_sort(arr: list) -> list:
    for i in range(len(arr)):
        min_index = i

        for j in range(i+1, len(arr)):
            if arr[min_index] > arr[j]:
                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]
        # arr[min_index], arr[i] = arr[i], arr[min_index]

    return arr


# a = [22, 1, 5, 2, 20]
# print(selection_sort(a))

b = ['daniel', 'shahin']
b[1], b[0] = b[0], b[1]
print(b)
