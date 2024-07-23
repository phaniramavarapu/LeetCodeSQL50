'''
a1 = int(input("enter number one: "))
a2 = int(input("enter number two: "))
a3 = int(input("enter number one: "))
a4 = int(input("enter number two: "))

if(a1>a2 and a2>a3 and a1>a4):
    print("greatest number is: ", a1)
elif(a2>a1 and a2>a3 and a2>a4):
    print("greatest number is: ", a2)
elif(a3>a1 and a3>a2 and a3>a4):
    print("greatest number is: ", a3)
elif(a4>a1 and a4>a3 and a4>a2):
    print("greatest number is: ", a4)
'''
'''
marks1 = int(input("enter marks1: "))
marks2 = int(input("enter marks2: "))
marks3 = int(input("enter marks3: "))

total_percentage = (100*(marks1 + marks2 + marks3))/300

if(total_percentage >= 40 and marks1>33 and marks2>33 and marks3>33):
    print("you are passed", total_percentage)
else:
    print("you are failed, try again next year")
'''
'''
p1 = "make a lot of money"
p2 = "buy now"
p3 = "subscribe this"
p4 = "click this"

message = input("enter your comment: ")

if((p1 in message) or (p2 in message) or (p3 in message) or (p4 in message)):
    print("this comment is a spam")
else:
    print("this comment is not a spam")
'''
'''
username = input("enter user name: ")
if len(username) <10:
    print("your user name contains less than 10 characters")
else:
    print("your user name contains more than or equal to 10 characters")
'''

'''
d = ["Hary", "Rohan", "Shubham", "Deepak"]
name = input("enter a name: ")
if(name in d):
    print("your name in the list")
else:
    print("your name is not in the list")
'''

'''
marks = int(input("enter your marks: "))

if marks <= 100 and marks >=90:
    grade = "Ex"
elif marks < 90 and marks >=80:
    grade = "A"
elif marks < 80 and marks >=70:
    grade = "B"
elif marks < 70 and marks >=60:
    grade = "C"
elif marks < 60 and marks >=50:
    grade = "D"

print("your grade is: ", grade)
'''

post = input("enter the post: ")

if("Harry".lower() in post.lower()):
    print("this post is talking about harry")
else:
    print("this is not about harry")