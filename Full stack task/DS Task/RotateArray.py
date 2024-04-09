def rotate_array(nums, k):
    k = k % len(nums)
    
    nums.reverse()
    
    reverse(nums, 0, k - 1)
    
    reverse(nums, k, len(nums) - 1)

def reverse(nums, start, end):
    while start < end:
        nums[start], nums[end] = nums[end], nums[start]
        start += 1
        end -= 1

nums =   [3, 8, 9, 2, 5]
k = 2
rotate_array(nums, k)
print("Rotated array:", nums)
