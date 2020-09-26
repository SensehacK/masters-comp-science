# More interesting use of loops

# L1. One of the first known examples of encryption was used by Julius Caesar. Caesar needed to provide written instructions to his generals, but he didn’t want his enemies to learn his plans if the message slipped into their hands. As result, he developed what later became known as the Caesar Cipher.

# The idea behind this cipher is simple (and as a result, it provides no protection against modern code breaking techniques). Each letter in the original message is shifted by 3 places. As a result, A becomes D, B becomes E, C becomes F, D becomes G, etc. The last three letters in the alphabet are wrapped around to the beginning: X becomes A, Y becomes B and Z becomes C. Non-letter characters are not modified by the cipher.

# Write a program that implements a Caesar cipher. Allow the user to supply the message and the shift amount, and then display the shifted message. Ensure that your program encodes both uppercase and lowercase letters.

# Hint: you can use a string that contains all letters as your reference as shown below


alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet[0]

caeser_str = "My name is Kautilya XXXx y ZZZZzz"
caeser_list = ""

for char in caeser_str:

    if char == " ":
        caeser_list += " "
        continue

    isUpperCase = char.isupper()
    # Lowercase
    index_int = alphabet.find(char.lower())+3

    if index_int > 25:
        index_int = index_int - 26

    letter = alphabet[index_int]
    caeser_list += letter.upper() if isUpperCase else letter


print(caeser_list)
