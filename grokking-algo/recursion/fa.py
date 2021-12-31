
# with for loop
def fact(x: int) -> int:
    res = 1
    for i in range(1, x+1):
        res *= i
    return res


def fact_with_while(num: int) -> int:
    res = 1
    # we have problem with condition
    while num > 1:
        res *= num
        num = num - 1
    return res


# print(fact_with_while(5))
def fact_recursion(num: int) -> int:
    if num == 1:
        return 1
    else:
        return num * fact_recursion(num - 1)


print(fact_recursion(5))
