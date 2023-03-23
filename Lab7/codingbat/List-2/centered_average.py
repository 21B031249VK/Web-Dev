def centered_average(nums):
    a = nums[0]
    b = nums[0]
    s = 0
    for i in nums:
        if i > a:
            a = i
        if i < b:
            b = i
    for i in range(len(nums)):
        if nums[i] == a:
            nums.pop(i)
            break
    for i in range(len(nums)):
        if nums[i] == b:
            nums.pop(i)
            break
    for i in nums:
        s += i
    return s / len(nums)
