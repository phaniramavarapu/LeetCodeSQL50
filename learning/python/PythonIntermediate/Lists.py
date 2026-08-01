mylist = ['banana', 'apple', 'cherry']

print(mylist)

mylist2 = list()
print(mylist2)
#different data types

mylist3 = [1, 'abc', 'abc', 1.5, 'apple']
print(mylist3)

item = print(mylist3[0])
item2 = print(mylist3[-1])

for x in mylist3:
  print(x)

if 'banana' in mylist3:
  print("yes")
else:
  print('no')


print(len(mylist3))

mylist3.append("lemon")
print(mylist3)

mylist3.insert(2, 'orange')
print(mylist3)

a = mylist3.pop()
print(a)
print(mylist3)

b = mylist3.remove('abc')
print(mylist3)

c = mylist2.clear()
print(mylist2)

print(mylist3)
d = mylist3.reverse()
print(mylist3)

mylist4 = [5, 7, 3, 5, 8, 3, 1, 7, -2, 3.2]
e = mylist4.reverse()
print(mylist4)

f = mylist4.sort()
print(mylist4)

g = mylist.sort()
print(mylist)

mylist5 = [3,6,5,1,7,4]
newlist = sorted(mylist5)
print(newlist)
print(mylist5)

mylist6 = [0] * 5
print(mylist6)
mylist7 = [1,2,3]

mylist8 = mylist6 + mylist7
print(mylist8)

mylist9 = [1,2,3,4,5,6,7,8,9]

a1 = mylist9[3:5]
print(a1)
a2 = mylist9[:5]
print(a2)
a3 = mylist9[2:6:2]
print(a3)
a4 = mylist9[::-1]
print(a4)

list_org1 = ['banana', 'cherry', 'apple']
list_cpy = list_org1
list_cpy.insert(1,"orange")

print(list_cpy)
print(list_org1)

list_cpy2 = list_org1.copy()
list_cpy2.append("askjf")
print(list_cpy2)
print(list_org1)

list10 = [1,2,3,4,5]

list11 = [i*i*i for i in list10]
print(list11)

