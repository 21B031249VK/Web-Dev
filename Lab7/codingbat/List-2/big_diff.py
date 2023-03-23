def big_diff(nums):
    a = nums[0]
    b = nums[0]
    for i in nums:
        if i > a:
            a = i
        if i < b:
            b = i
    return a - b
