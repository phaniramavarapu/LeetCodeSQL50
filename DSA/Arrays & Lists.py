# my_list = [1,4,2,4,5,7,6]
# print(my_list)

# #append
# my_list.append(4)
# print(my_list)

# #insertion, insert(index, value)
# my_list.insert(7, 'c')
# print(my_list)

# my_list.extend([10, 20, 'a'])
# print(my_list)

# my_list.remove('a')
# print(my_list)

# my_list.pop(3)
# print(my_list)  

# my_list.clear()
# print(my_list)

# my_list = [1,3,4,5,3,4,2,6,7]
# print(my_list.index(5))

# print(my_list.count(3))

# my_list.sort()
# print(my_list)

# my_list.sort(reverse=True)
# print(my_list)

# sorted_list = sorted(my_list)
# print(sorted_list)

# my_list.reverse()
# print(my_list)

# my_list1 = [1,5,2,4,7,3,2,3,5]
# my_list1.reverse()
# print(my_list1)

# my_list2 = my_list1.copy()
# print(my_list2)

# new_list = my_list2[2:6]
# print(new_list)

# my_list = [1, 3, 4, 5, 2, 6]
# print(len(my_list))

# print(min(my_list))
# print(max(my_list))
# print(sum(my_list))

#reversing a list

# def reverse_list(lst):
#     start, end = 0, len(lst) - 1
#     while start < end:
#         lst[start], lst[end] = lst[end], lst[start]
#         start += 1
#         end -= 1

# my_list = [1, 3, 4, 5]
# reverse_list(my_list)
# print(my_list)


# # def bs1(nums):
# x = input("enter a number: ")  
# print(x)  

# def func1():
#     list1 = [-1, 2, 3, 4]
#     x = int(input("enter a number: "))
#     if (x in list1):
#         print(list1.index(x))
#     else:
#         print(-1)

# func1()


class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = (left + right) // 2
            
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1

# Example usage:
# Create an instance of Solution
sol = Solution()

# Define your test cases
nums1 = [-1, 0, 3, 5, 9, 12]
target1 = 9
print(sol.search(nums1, target1))  # Output: 4

nums2 = [-1, 0, 3, 5, 9, 12]
target2 = 2
print(sol.search(nums2, target2))  # Output: -1


