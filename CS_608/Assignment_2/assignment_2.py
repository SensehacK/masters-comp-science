import random as rd


class ShuffleDecks():
    "Class for defining shuffleDecks"
    cardRanks = ["Jack", "Queen", "King",
                 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    cardType = ['Spade', 'Diamond', 'Hearts', 'Club']
    shuffleList = []

    def __init__(self):
        "Constructor initialized // Calling function"
        self.properShuffle()

    def retShuffle(self):
        "Created a function for Returning Shuffle"
        return (str(self.cardRanks[rd.randint(0, len(self.cardRanks)-1)]) + " of " + str(self.cardType[rd.randint(0, len(self.cardType)-1)]))

    def callShuffleN(self, numberT):
        "function called depending on n number of times."
        for _ in range(numberT):
            print(self.retShuffle())

    def properShuffle(self):
        "Shuffle for real"
        for x in self.cardRanks:
            for y in self.cardType:
                self.shuffleList.append(x+" of " + y)
        rd.shuffle(self.shuffleList)


print("Hello Kautilya!")
ShuffleDecks()

# Printing whole list
for card in ShuffleDecks.shuffleList:
    print(card)


# Different types of invocations
# Calling Shuffle 10 times
# ShuffleDecks().callShuffleN(10)

# Calling Proper Shuffle function using class -> function
# ShuffleDecks().properShuffle()

# Copy List to a new list properly / Cloning list & then shuffling list
# shuffleLt = ShuffleDecks.shuffleList[:]
# rd.shuffle(shuffleLt)
