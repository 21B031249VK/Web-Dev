def max_end3(nums):
    for i in range(3):
        nums[i] = max(nums[0], nums[2])
    return nums
