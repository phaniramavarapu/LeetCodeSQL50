'''
try:
    a = int(input("enter a number: "))
    print(a)
except Exception as e:

    print(e)
print("thank you")

'''

try:
    a = int(input("enter a number: "))
    print(a)

except ValueError as d:
    print("hey")

except Exception as e:

    print(e)
print("thank you")
