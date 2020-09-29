for movie in movies:
    # Find if actor occurrs between 37 and 41 inclusive
    print(movie)
    if movie.find("actor", 37, 42) == -1:
        print("Word not found")
    # Count occurrences and replace two by one
    elif movie.count("actor") == 2:
        print(movie.replace("actor actor", "actor"))
    else:
        # Replace three occurrences by one
        print(movie.replace("actor actor actor", "actor"))


for movie in movies:
    # Find the first occurrence of word
    print(movie.find("money", 12, 51))

for movie in movies:
    try:
        # Find the first occurrence of word
        print(movie.index("money", 12, 51))
    except ValueError:
        print("substring not found")


# Replace negations
movies_no_negation = movies.replace("isn't", "is")

# Replace important
movies_antonym = movies_no_negation.replace("important", "insignificant")

# Print out
print(movies_antonym)
