
voted = {
    "daniel": True
}


def check_voter(name: str):
    if voted.get(name):
        print('kick them out')
    else:
        voted[name] = True
        print('let them vote')


print(check_voter('daniel'))
print(voted.daniel)
