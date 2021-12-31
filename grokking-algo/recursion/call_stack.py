

def greet(name):
    print(f"hello {name}")
    greet2(name)
    print('getting ready to say goodbye')
    bye()


def greet2(name):
    print(f"how are you {name}")


def bye():
    print('okay bye')


print(greet('daniel'))
