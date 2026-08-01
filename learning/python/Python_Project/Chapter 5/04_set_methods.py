s = {1,2,3,3,4,4,7,8,"Harry"}
print(s)
s.add(566)
print(s, type(s))

print(len(s))
s.remove(1)
print(s)

s1 = {1,45,6,78}
s2 = {7,8,1,78}
print(s1.union(s2))
print(s1.intersection(s2))


b1= {1, 23, 45}
b2= {6, 1, 3, 34, 23, 54}
print(b1-b2)

