'''
abc = [1,2,3,4,5,6]
for i in abc:
    print(i)
'''
'''
#Square pattern
for number in range(1,6):
    for number in range(1,6):
        print(number, end="")
    print()

'''


#Triangle Pattern

# n = int(input("Enter the number of rows: "))
# for i in range(1, n+1):
#     for j in range(1, i+1):
#         print(j, end="")
#     print()

'''
#creating our own loop
def newForLoop(iterable):

    #extracting iterator out of iterable
    iterator = iter(iterable)

    #condition to check if looping is done
    loopingfinished = False

    while not loopingfinished:
        try:
            nextItem = next(iterator)
        except StopIteration:
            loopingfinished = True
        else:
            print(nextItem)

newForLoop([1,2,3,4])
'''


