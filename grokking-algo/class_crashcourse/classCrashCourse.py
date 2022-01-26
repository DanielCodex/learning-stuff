# i don't know python class well enough

class Dog:
    # Class attribute
    species = "Canis familiaris"

    def __init__(self, name, age):
        self.name = name
        self.age  = age

    # really useful
    def __str__(self):
        return f"{self.name} is {self.age} years old"

    def speak(self, sound):
        return f"{self.name} says {sound}"


# child class, inherits from parenet
class someDogBreed(Dog):
    def speak(self, sound="ark"):
        return f"{self.name} says {sound}"

somedog = someDogBreed("dog", 22)
print(type(somedog))
print(isinstance(somedog, Dog))