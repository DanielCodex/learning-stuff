

def sum_array(arr: list) -> int:
    if len(arr) == 1:
        return arr
    else:
        return arr[0] + sum_array(arr[1:])


a = [1, 2, 3]
print(sum_array(a))
print(a[1:])
