
a = int(input("Enter your age: "))

#if statement 1
if(a%2 == 0):
    print("a is even")
#end of if statement 1

#if statement 2
if(a>=18):
    print("you are above the age of consent")
    print("good for you")

elif(a<0):
    print("you are entering an invalid age")

elif(a==0):
    print("you are entering 0 which is not a valid age")

else:
    print("you are below the age of consent")

print("End of program")