
# try:
#     with open("1.txt", "r") as f:
#         print(f.read())
# except Exception as e:
#     print(e)

# try:
#     with open("2.txt", "r") as f:
#         print(f.read())
# except Exception as e:
#     print(e)

# try:
#     with open("3.txt", "r") as f:
#         print(f.read())
# except Exception as e:
#     print(e)

# print("thank you")
'''
d = [1, 3, 4, 5, 6, 7]

for i, item in enumerate(d):
    if i ==2 or i == 4 or i == 6:
        print(item)
'''
'''
n = int(input("Enter a number: "))
table = [n*i for i in range(1, 11)]
print(table)
'''

'''
try:
    a = int(input("Enter a: "))
    b = int(input("Enter b: "))
    print(a/b)
except ZeroDivisionError as v:
    print("infinite")
'''


n = int(input("Enter a number: "))
table = [n*i for i in range(1, 11)]
with open("tables.txt", "a") as f:
    f.write(str(table) + "/n")