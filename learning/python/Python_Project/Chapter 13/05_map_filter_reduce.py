
#Map example

d = [1, 3, 4, 5]
square = lambda x: x*x

sqList = map(square, d)
print(list(sqList))


#filter example
def even(n):
    if (n%2 == 0):
        return True
    return False

onlyEven = filter(even, d)
print(list(onlyEven))

#Reduce example
from functools import reduce
def sum(a, b):
    return a+b

print(reduce(sum, d))


