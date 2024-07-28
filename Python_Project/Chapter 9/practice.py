'''
file_path = '/Users/phani/Github/Python_Project/Chapter 9/poem.txt'
with open(file_path, 'r') as file:
    content = file.read()
    if("twinkle" in content):
        print("the word twinkle is present in the content")
    else:
        print("the word twinkle is present in the content")
'''
'''
import random


def game():
    print("you are playing the game..")
    score = random.randint(1,62)
    #fetch the hiscore
    file_path = '/Users/phani/Github/Python_Project/Chapter 9/hiscore.txt'
    with open(file_path) as file:
        hiscore = file.read()
        if(hiscore != ""):
            hiscore = int(hiscore)
        else:
            hiscore = 0
    print(f"your score: {score}")
    if(score>hiscore):
        with open(file_path, "w") as file:
            file.write(str(score))

    return score

game()
    
'''

'''
def generateTable(n):
    table=""
    for i in range(1, 11):
        table += f"{n} X {i} = {n*i}\n"
    with open(f"/Users/phani/Github/Python_Project/Chapter 9/tables/tables_{n}.txt", "w") as f:
        f.write(table)


for i in range(2, 21):
    generateTable(i)
'''
'''
word = "Donkey"
file_path = '/Users/phani/Github/Python_Project/Chapter 9/word.txt'
with open(file_path, 'r') as file:
    content = file.read()

contentNew = content.replace(word, "####")
with open(file_path, 'w') as file:
    file.write(contentNew)
'''

file_path = '/Users/phani/Github/Python_Project/Chapter 9/log.txt'
with open(file_path, 'r') as file:
    lines = file.readline()
lineno = 1
for line in lines:

    if("python" in line):
        print(f"yes python is present. line no: {lineno}")
        break
    lineno += 1

else:
    print("no python is not present")

