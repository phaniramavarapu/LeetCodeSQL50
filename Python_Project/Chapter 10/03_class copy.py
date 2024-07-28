class Employee:
    language = "Python" #this is a class attribute
    salary = 1200000

    def __init__(self, name, salary, language):
        
        self.name = name 
        self.salary = salary
        self.language = language
        print("i am creating an object") #dunder method which automatically cals
    
    def getInfo(self):
        print(f"the lanugage is {self.language}. the salary is {self.salary}")
    
    @staticmethod
    def greet(self):
        print("good morning")


harry = Employee("Harry", 1300000, "javascript")
harry.name = "Harry"
print(harry.name, harry.salary, harry.language)
#rohan = Employee()