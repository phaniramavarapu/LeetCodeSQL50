class Employee:
    language = "Python" #this is a class attribute
    salary = 1200000

    def __init__(self):
        print("i am creating an object") #dunder method which automatically cals
    
    
    def getInfo(self):
        print(f"the lanugage is {self.language}. the salary is {self.salary}")
    
    @staticmethod
    def greet(self):
        print("good morning")


harry = Employee()
harry.name = "Harry"
harry.language = 'javascript'

harry.greet()
harry.getInfo()