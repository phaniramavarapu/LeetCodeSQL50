x = input("enter your name: ")
print(f"Good Afternoon {x}")
print("Good afternoon", x)

letter = '''Dear <|Name|>, 
You are selected!
<|Date|>'''
print(letter.replace("<|Name|>", "Harry").replace("<|Date|>", "24-04-2024"))

name = "Harry is a good  boy and  "
print(name.find("  "))

name = "Harry is a good  boy and  "
print(name.replace("  ", " "))

letter = "Dear Harry, this python course is nice. Thanks!"
print(letter)
letter = "Dear Harry, \n\tthis python course is nice. \nThanks!"
print(letter)