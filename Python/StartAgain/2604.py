#variables and data types in Python

x = 10 
name = "John"
is_student = True
scores = [10, 50, 30]
profile = {"age": 20, "height": 5.9}

#print(profile["age"])

#lists
fruits = ["apple", "banana", "cherry"]
#print(fruits[0])  # Output: apple
#tuples
fruits_tuple = ("apple", "banana", "cherry")
#print(fruits_tuple[0])  # Output: apple
#sets
fruits_set = {"apple", "banana", "cherry", "apple"}  # Duplicates are ignored
#print("apple" in fruits_set)  # Output: True

'''
Feature | List          | Tuple |            Set
Syntax | [1, 2, 3]      | (1, 2, 3)            | {1, 2, 3}
Mutable? | ✅ Yes       | ❌ No (Immutable)     | ✅ Yes
Ordered? | ✅ Yes       | ✅ Yes                | ❌ No (Unordered)
Duplicates? | ✅ Allows | ✅ Allows             | ❌ No Duplicates
Indexing? | ✅ Yes      | ✅ Yes                | ❌ No
Use case | General-purpose | Fixed data (faster) | Unique items, fast lookups
'''
#print(fruits_set)

#print(fruits_tuple[0])  # Output: apple
#print(fruits[1])
fruits[1] = "orange"
print(fruits[1])  # Output: orange
print(fruits)  # Output: ['apple', 'orange', 'cherry']

fruits_set[1]= "orange" # TypeError: 'set' object does not support item assignment
print(fruits_set)  # Output: {'banana', 'cherry', 'apple'}