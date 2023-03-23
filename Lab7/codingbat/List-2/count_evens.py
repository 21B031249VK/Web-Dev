def count_evens(nums):
    n = 0
    for i in nums:
        if i % 2 == 0:
            n += 1
    return n
