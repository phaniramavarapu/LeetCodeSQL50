def merge(nums1, m, nums2, n):
    p1 = m-1 #Pointer for the last element in the num1's valid part
    p2 = n-1 #pointer for the last element in the num2's valid part
    p = m+n-1 #pointer for the last element in num1's last capacity

    #while there are elements in both nums1 and nums2 to compare

    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1 #move pointer p1 to the left
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1

    nums1[:p2 + 1] = nums2[:p2+1]

nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 =[2, 5, 6]
n = 3
merge(nums1, m, nums2, n)
print(nums1)


