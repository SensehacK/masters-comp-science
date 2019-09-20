import random as rd

shuffleLt = []


class ShuffleDecks():
    "Class for defining shuffleDecks"
    cardRanks = ["Jack", "Queen", "King",
                 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    cardType = ['Spade', 'Diamond', 'Hearts', 'Club']
    shuffleList = []

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

# Calling Shuffle 10 times
# ShuffleDecks().callShuffleN(10)


print("Hello Kautilya!")
ShuffleDecks().properShuffle()
shuffleLt = ShuffleDecks.shuffleList[:]
# print(ShuffleDecks.shuffleList)
# print(len(ShuffleDecks.shuffleList))
# print(type(ShuffleDecks.shuffleList))
# print(type(shuffleLt))
rd.shuffle(shuffleLt)
# print(shuffleLt.split())
# print(len(shuffleLt))
# print(shuffleLt)

for card in shuffleLt:
    print(card)
# ShuffleDecks().callShuffleN(100)
