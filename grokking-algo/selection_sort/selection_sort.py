
def selection_sort(L):
    # i indicates how many items were sorted
    for i in range(len(L)-1):
        # To find the minimum value of the unsorted segment
        # We first assume that the first element is the lowest
        min_index = i
        # We then use j to loop through the remaining elements
        for j in range(i+1, len(L)-1):
            # Update the min_index if the element at j is lower than it
            if L[j] < L[min_index]:
                min_index = j
        # After finding the lowest item of the unsorted regions, swap with the first unsorted item
        L[i], L[min_index] = L[min_index], L[i]


# x = [1, 2, 3, 4]
y = [3, 1, 41, 59, 26, 53, 59]
# print(selection_sort(y))
# selection_sort(y)
# print(y)


def selectionSort(array):
    n = len(array)
    for i in range(n):
        # Initially, assume the first element of the unsorted part as the minimum.
        minimum = i

        for j in range(i+1, n):
            if (array[j] < array[minimum]):
                # Update position of minimum element if a smaller element is found.
                minimum = j

        # Swap the minimum element with the first element of the unsorted part.
        temp = array[i]
        array[i] = array[minimum]
        array[minimum] = temp

    return array


x = [1]
print(selectionSort(x))
