class Employee:
    
    language = "Python" #this is a class attribute
    salary = 1200000

harry = Employee()
harry.language = 'Javascript'
print(harry.language, harry.salary) 

