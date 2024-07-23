
'''
def greatest(a, b, c):
    if(a>b and a>c):
        return a
    elif(b>a and b>c):
        return b
    elif(c>a and c>b):
        return c
    
a = 3
b = 5
c = 7
print(greatest(a, b, c))
'''
'''
def f_to_c(f):

    return 5*(f-32)/9

f = int(input("enter temerature in F: "))
c = f_to_c(f)
print(f"{round(c,2)} °C")
'''
'''
def sum(n):
    if(n==1):
        return 1
    return sum(n-1)+n

print(sum(5))
'''
'''
def pattern(n):
    if(n==0):
        return 
    print("*" * n)
    pattern(n-1)

pattern(5)
'''
'''
def inch_to_cms(inch):
    return inch*2.54

n = int(input("Enter value in inches: "))
print(f"the corresponding value in cms is: {inch_to_cms(n)}")
'''
'''
def rem(d, word):
    n = []
    for item in d:
        if not(item == word):
            n.append(item.strip(word))
    return n
    

d = ["Harry", "Rohan", "Shubham", "an"]

print(rem(d, "an"))
'''

def multiply(n):
    for i in range(1, n+1):
        print(f"{n} X {i} = {n*i}")
multiply(10)
        
