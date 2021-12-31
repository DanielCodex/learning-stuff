array = [1, 2, 3, 4]


def add_array(arr: list) -> int:
    res = 0
    for i in arr:
        print(i)
        res += i
    return res


# print(add_array([1, 2, 3, 4, 5, 6]))

def sum_array_recursion(arr: list) -> int:
    if len(arr) == 0:
        return 0
    else:
        # i didn't know that 1: part
        return arr[0] + sum_array_recursion(arr[1:])


print(sum_array_recursion(array))
