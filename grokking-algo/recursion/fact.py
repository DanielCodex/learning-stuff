
def fact(x: int) -> int:
    if x == 1:
        return 1
    else:
        return x * fact(x - 1)


# print(fact(3))

# with for loop
def fact_loop(n: int) -> int:
    res = 1
    for i in range(1, n+1):
        print(i)

        res *= i
    return res


# print(fact_loop(3))

def fact_while_loop(n: int) -> int:
    if n == 1:
        return 1

    res = 1
    while n > 1:
        res *= n
        n = n - 1

    return res


print(fact_while_loop(3))
