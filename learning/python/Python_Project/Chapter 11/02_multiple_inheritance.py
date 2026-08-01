class Employee:
    company = "ITC"
    name = "default name"
    def show(self):
        print(f"The name of the employee is {self.name} and the company is {self.company}")

class Coder:
    language = "python"
    def printLanguages(self):
        print(f"out of all the languages here is your language: {self.language}")
# class Programmer:
#     company = "ITC Infotech"
#     def show(self):
#         print(f"the name is {self.name} and the salary is {self.salary}")

#     def showLanguage(self):
#         print(f"the name is {self.name} and he is good with {self.language} language")




class Programmer(Employee, Coder):
    company = "ITC Infotech"
    def showLanguage(self):
        print(f"the name is {self.name} and he is good with {self.language} language")

a = Employee()
b = Programmer()

b.show()
b.printLanguages()
b.showLanguage

