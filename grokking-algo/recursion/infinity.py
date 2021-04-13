

def countdown(n: int) -> int:
    print(n, end=" ", flush=True)
    if n <= 0:
        return
    else:
        return countdown(n - 1)


print(countdown(9))
