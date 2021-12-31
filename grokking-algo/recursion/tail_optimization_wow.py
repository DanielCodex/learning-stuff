
# here result should be one 👍
def fact_tail(number: int, result=1) -> int:
    if number == 1:
        return result
    else:
        return fact_tail(number - 1, number * result)


print(fact_tail(5))
