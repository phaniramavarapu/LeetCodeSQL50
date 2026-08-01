marks = {
    "Harry": 100,
    "Shubham": 56,
    "Rohan": 34
}
print(marks.keys())
print(marks.values())
print(marks.items())
marks.update({"Harry":98})
print(marks)
marks.update({"Harry":99, "Renuka":100})
print(marks)

print(marks.get("Rohan"))
print(marks["Rohan"])

