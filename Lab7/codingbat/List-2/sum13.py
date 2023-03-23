def sum13(nums):
    s = 0
    if len(nums) > 0:
        if nums[0] != 13:
            s += nums[0]
    for i in range(1, len(nums)):
        if nums[i] != 13 and nums[i - 1] != 13:
            s += nums[i]
    return s
