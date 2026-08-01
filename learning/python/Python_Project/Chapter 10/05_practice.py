'''
#problem 1
class programmers:
    company = "Microsoft"
    def __init__(self, name, salary, pin):
        self.name = name
        self.salary = salary
        self.pin = pin

p = programmers("harry", 12000000, 245001)
print(p.name, p.salary, p.pin, p.company)
r = programmers("rohab", 11000000, 225001)
print(r.name, r.salary, r.pin, r.company)
'''
'''
#problem 2
class Calculator:
    def __init__(self, n):
        self.n = n
    def square(self):
        print(f"the square is {self.n*self.n}")
    def cube(self):
        print(f"the cube is {self.n*self.n*self.n}")
    def squareroot(self):
        print(f"The squareroot is {self.n**1/2}")

a = Calculator(4)
a.square()
a.cube()
a.squareroot()
'''
'''
#problem 3
class Demo:
    a = 4

o = Demo()
print(o.a) #prints the class attribute
o.a = 0 #instance attribute is set
print(o.a) #prints the instance attribute because instance attribute is present
print(Demo.a) #prints the class attribute
'''
'''
#problem 4
class Calculator:
    def __init__(self, n):
        self.n = n
    def square(self):
        print(f"the square is {self.n*self.n}")
    def cube(self):
        print(f"the cube is {self.n*self.n*self.n}")
    def squareroot(self):
        print(f"The squareroot is {self.n**1/2}")

    @staticmethod
    def hello():
        print("hello there")

a = Calculator(4)
a.hello()
a.square()
a.cube()
a.squareroot()
'''

#problem 5

from random import randint
class Train:

    def __init__(self, trainNo):
        self.trainNo = trainNo


    def book(self, fro, to):
        print(f"Ticket is booked in train no: {self.trainNo} from {fro} to {to}")

    def getStatus(self):
        print(f"train no: {self.trainNo} is running on time")

    def getFair(self, fro, to):
        print(f"Ticket fare in train no: {self.trainNo} from {fro} to {to} is {randint(222, 5555)}")

t = Train(12399)
t.book("rampur", "delhi")
t.getStatus()
t.getFair("rampur", "delhi")



