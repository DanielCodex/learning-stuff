
# give me the position of the element





def binary_search(arr: list, item: int) -> int:
    low = 0
    high = len(arr) - 1

    while low <= high:
        middle = (low + high) // 2
        guess = arr[middle]

        if guess == item:
            # return index
            return middle
        
        if guess > item:
            high = middle - 1
        else:
            low = middle + 1
    
    return None


a = [1, 2, 3, 4, 5]
print(binary_search(a, 2))
