import random as rd


class ShuffleDecks():
    '''
    "Class for defining shuffleDecks"
    '''
    cardRanks = ["Jack", "Queen", "King",
                 "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    cardType = ['Spade', 'Diamond', 'Hearts', 'Club']
    shuffleList = []

    for x in cardRanks:
        for y in cardType:
            shuffleList.append(x+" of " + y)

    def __init__(self):
        "Constructor initialized // Calling function"
        self.properShuffle()

    def retShuffle(self):
        "Created a function for Returning Random from both arrays cardRanks and cardType"
        return (str(self.cardRanks[rd.randint(0, len(self.cardRanks)-1)]) + " of " + str(self.cardType[rd.randint(0, len(self.cardType)-1)]))

    def retShuffleRandom(self):
        print(self.shuffleList[rd.randint(0, len(self.shuffleList)-1)])

    def callShuffleN(self, numberT, type):
        "function called depending on n number of times."
        for _ in range(numberT):
            if type == "true":
                self.retShuffleRandom()
            else:
                print(self.retShuffle())

    def properShuffle(self):
        "Shuffle for real"
        rd.shuffle(self.shuffleList)

# Different types of invocations


# Calling Shuffle n times
print('Shuffled Deck of cards and selecting the random card of the newly shuffled deck')
ShuffleDecks().callShuffleN(1, "true")
