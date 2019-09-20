import random
print("Hello Sensehack!")


class Die():
    def roll(self):
        return random.randint(1, 6)


def runDie(times):
    for x in range(times):
        # print(x)
        print(Die().roll())


print("Calling Function runDie")
runDie(6)
print("KS")
print(Die().roll())
