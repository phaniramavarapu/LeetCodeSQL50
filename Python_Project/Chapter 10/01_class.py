class Employee:
    name = "Harry"
    language = "Py" #this is a class attribute
    salary = 1200000

harry = Employee()
print(harry.name, harry.language, harry.salary) 

rohan = Employee()
rohan.name = "Rohan roro robinson" #this is an instance attribute
print(rohan.name, rohan.language, rohan.salary)