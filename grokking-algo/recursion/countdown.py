
def count_down(num: int) -> int:
    print(num)
    # nice
    if num <= 0:
        return
    else:
        count_down(num - 1)


print(count_down(5))
