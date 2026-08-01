# name = input("enter a name: ")
# marks = int(input("enter marks:"))
# phone = int(input("enter phone number:"))

# s = "The name of the student is {}, his marks are {} and phone number is {}". format (name, marks, phone)
# print(s)


'''
table = [str(7*i) for i in range(1,11)]

s = "\n".join(table)
print(s)
'''

'''
def divisible5(n):
    if(n%5 == 0):
        return True
    return False

a = [1, 2, 3244, 252534, 52,3, 55434, 63434, 50, 100]
f = list(filter(divisible5, a))
print(f)
'''

from functools import reduce
d = [1, 2, 3244, 252534, 52,3, 55434, 63434, 50, 100]

def greater(a, b):
    if (a>b):
        return a
    return b

print(reduce(greater, d))
