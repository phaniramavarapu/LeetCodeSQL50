'''
a = "a very long string with emails
emails = []
3 seconds
'''

file_path = '/Users/phani/Github/Python_Project/Chapter 9/file.txt'
with open(file_path, 'r') as file:
    data = file.read()
    print(data)
    file.close()