'''
file_path = '/Users/phani/Github/Python_Project/Chapter 9/file.txt'
with open(file_path, 'r') as file:
    data = file.readlines()
    print(data, type(data))
    file.close()
'''
'''
file_path = '/Users/phani/Github/Python_Project/Chapter 9/file.txt'
with open(file_path, 'r') as file:
    line1 = file.readline()
    print(line1, type(line1))
    
    line2 = file.readline()
    print(line2, type(line2))
    
    line3 = file.readline()
    print(line3, type(line3))
    
    line4 = file.readline()
    print(line4, type(line4))
    file.close()
'''

file_path = '/Users/phani/Github/Python_Project/Chapter 9/file.txt'
with open(file_path, 'r') as file:
    line = file.readline()
    while(line != ""):
        print(line)
        line = file.readline()
    file.close()