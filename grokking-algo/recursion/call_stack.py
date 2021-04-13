

def greet(name: str):
    print("first print from greet")
    greet2(name)
    print("second print from greet")
    bye()


def greet2(name: str):
    print("in which order we came out")

    def bye():
        print("i should be the final one")


print(greet('he'))
