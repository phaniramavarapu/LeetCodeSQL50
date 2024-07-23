'''
#multiplication table
i = int(input("Enter a number: "))

for x in range(1, 11):
    print(f"{x} X {i} = {x * i}")
'''

'''
d = ["Harry", "Soham", "Sachin", "Rahul"]

for name in d:
    if(name.startswith("S")):
        print(f"Hello {name}")
    else:
        print(f"Hi{name}")
'''

'''
i = int(input("Enter a number: "))

x = 1

while(x < 11):
    x += 1
    print(f"{x} X {i} = {x * i}")

'''

'''
n = int(input("Enter a number: "))

for i in range(2, n):
    if(n%i) == 0:
        print("number is not prime")
        break
else:
        print("number is prime")
'''

'''
n = int(input("Enter a number: "))
i = 1
sum = 0
while(i<=n):
    sum += i
    i += 1

print(sum)
'''

'''
#factorial program
n = int(input("Enter a number: "))
product = 1
for i in range(1, n+1):
    product = product * i
print(f"the factorial of {n} is {product}")
'''

'''
#star pattern
n = int(input("Enter the number: "))
for i in range(1, n+1):
    print(" "* (n-i), end="")
    print("*"* (2*i-1), end="")
    print("\n")

'''

'''
n = int(input("Enter the number: "))
for i in range(1, n+1):
    print("*"* (2*i-1), end="")
    print("\n")
'''
'''
n = int(input("Enter the number: "))
for i in range(1, n+1):
    if(i==1 or i==n):
        print("*"* n, end="")
    else:
        print("*", end="")
        print(" "* (n-2), end="")
        print("*", end="")
    print("")
'''
n = int(input("enter a number: "))
for i in range(1,11):
    print(f"{n} X {11-i} = {n*(11-i)}")



