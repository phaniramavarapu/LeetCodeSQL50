'''
class TwoDVector:
    def __init__(self, i, j):
        self.i = i
        self.j = j

    def show(self):
        print(f"The vector is {self.i}i + {self.j}j")

class ThreeDVector(TwoDVector):
    def __init__(self, i, j, k):
        super().__init__(i, j)
        self.k = k
    
    def show(self):
        print(f"The vector is {self.i}i + {self.j}j +{self.k}k")

        
a = TwoDVector(1, 2)
a.show()
b = ThreeDVector(1, 2, 3)
b.show()
'''

'''
#02 problem
class Animals:
    pass

class Pets(Animals):
    pass

class Dog(Pets):
    @staticmethod
    def bark():
        print("bow bow!")
        
d = Dog()
d.bark()
'''

'''
#03problem
class Employee:
    pass

e = Employee()
e.salary = 345
e.increment = 20
'''
'''
class Employee:
    salary = 234
    increment = 20

    @property
    def salaryAfterIncrement(self):
        return(self.salary + self.salary*(self.increment/100))
    
    @salaryAfterIncrement.setter
    def salaryAfterIncrement(self, salary):
        self.increment = ((salary/self.salary)-1)*100

    
e = Employee()
#print(e.salaryAfterIncrement)
e.salaryAfterIncrement = 280
print(e.increment)
'''
'''
class Complex:
    def __init__(self, r, i):
        self.r = r
        self.i = i

    def __add__(self, c2):
        return Complex(self.r + c2.r, self.i + c2.i)
    

    def __str__(self):
        return f"{self.r} + {self.i}i"
    
c1 = Complex(1, 2)
c2 = Complex(2, 4)

print(c1 + c2)
'''

class Vector:
    def __init__(self, l):
      self.l = l 

    def __add__(self, other):
       result = Vector(self.x + other.x, self.y + other.y, self.z + other.z)
       return result
    
    def __mul__(self, other):
       result = self.x + other.x + self.y * other.y + self.z * other.z
       return result
    
    def __str__(self):
       return f"Vector({self.x}, {self.y}, {self.z})"
    
    def __len__(self):
       return 3
    
v1 = Vector([1,2,3])

print(len(v1))

