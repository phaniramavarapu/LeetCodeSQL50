mytuple = ("Max", 28, "Boston")
print(mytuple)
mytuple1 = "Max",
print(type(mytuple1))
mytuple2 = tuple([1,2,4])
print(mytuple2)

for i in mytuple:
  print(i)

if "abc" in mytuple:
  print(True)
else:
  print(False)

mytuple3 = ('a', 'b', 'c', 'd', 'e')
print(mytuple3.count('a'))
print(mytuple3.index('d'))

mylist = list(mytuple3)
print(mylist)
mytuple4 = tuple(mylist)
print(mytuple4)

a = (1,2,3,4,5,6,7,8,9)
b = a[2:4]
print(b)
c = [1,2,3,4,5,6,7,8,9]
d = c[2:4]
print(d)

mytuple5 = (5,6,7,8,9)
a,b,c,d,e = mytuple5
print(a)

mylist5 = (11,12,13,14,15)
a,*b,e = mylist5
print(b)
mylist6 = mylist5.reverse()
