

# why should i do this? was he high when writing this question
def find_max(arr: list) -> int:
    if len(arr) == 2:
        return arr[0] if arr[0] > arr[1] else arr[1]
    sub_max = max(arr[1:])  # we are literally using max in here 😆
    return arr[0] if arr[0] > sub_max else sub_max


print(find_max([1, 2, 3]))
print(max([1, 2, 3]))
