"""
friends = ["Kevin", "Karen", "Jim", "Oscar", "Toby"]
friends1 = ["Kevin", 2, False]

friends[1] = "Mike"
print(friends[1])
"""

lucky_numbers = [4,6,2,7,3]
friends = ["Kevin", "Karen", "Jim", "Oscar", "Toby"]

friends.extend(lucky_numbers)


friends.append("bob")


friends.insert(1, "Kelly")
friends.remove("Karen")
print(friends)