st = "hey harry you are amazing"

file_path = '/Users/phani/Github/Python_Project/Chapter 9/file.txt'
with open(file_path, 'w') as file:
    file.write(st)
    file.close()