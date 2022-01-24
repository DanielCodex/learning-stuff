
import re


def sum_recursion(arr: list) -> int:
    # or you can say len(arr) == 0: return 0 => then it will add up with 0
    if len(arr) == 1:
        return arr[0]
    else: 
        return arr[0] + sum_recursion(arr[1:])

a = [1,2,3, 4, 5]
print(sum_recursion(a))
