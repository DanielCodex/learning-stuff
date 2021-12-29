import math

print(math.log2(4000000000))


def log(x, base):
    result = ln(x)/ln(base)
    return result


def ln(x):
    n = 100000.0
    return n * ((x ** (1/n)) - 1)


print([i for i in range(0, 10)])

# hello htere :sim

# print(log(4, 2))
# if you have arrays of number
# a = [10.000, 20.000, 25.000]
# b = [int(i) for i in a]
# print(b)


# if you have arrays of number which are string
# a = ["10.000", "20.000", "25.000"]
# b = [i.replace(".", "") for i in a]
# print(b)
