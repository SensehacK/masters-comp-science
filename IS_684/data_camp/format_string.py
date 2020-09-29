from string import Template
from datetime import datetime
wikipedia_article = "In computer science artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals."

# Assign the substrings to the variables
first_pos = wikipedia_article[3:19].lower()
second_pos = wikipedia_article[21:44].lower()


# Import datetime

# Assign date to get_date
get_date = datetime.now()

# Add named placeholders with format specifiers
message = "Good morning. Today is {get_date:%B %d, %Y}. It's {get_date:%H:%M} ... time to work!"

# Format date
print(message.format(get_date=get_date))


field1 = "Field_"
field2 = "Field_"
field3 = "Field_"
fact1 = "Fact_"
fact2 = "Fact_"
fact3 = "Fact_"
fact4 = "Fact_"
# Complete the f-string
print(f"Data science is considered {field1!r} in the {fact1}st century")
print(f"Data science is considered {field2} in the {fact2:e}st century")
# Complete the f-string
print(f"{field3} create around {fact3:.2f}% of the data but only {fact4:.1f}% is analyzed")


# Include both variables and the result of dividing them
number1 = 120
number2 = 9
print(f" {number1} tweets were downloaded in {number2} minutes indicating a speed of {number1/number2:.1f} tweets per min")


# Import template
answers = dict(
    answer1="I really like the app. But there are some features that can be improved")
# Complete template string using identifiers
the_answers = Template(
    "Check your answer 1: $answer1, and your answer 2: $answer2")

# Use safe_substitute to replace identifiers
try:
    print(the_answers.safe_substitute(answers))
except KeyError:
    print("Missing information")
