def array_front9(nums):
    b = False
    if len(nums) < 4:
        for i in range(len(nums)):
            if nums[i] == 9:
                b = True
                break
    else:
        for i in range(4):
            if nums[i] == 9:
                b = True
                break
    return b
