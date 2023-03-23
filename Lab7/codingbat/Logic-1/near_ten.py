def near_ten(num):
    if (num + 2) % 10 <= 2 or (num - 2) % 10 >= 8 or (num - 2) % 10 <= 0:
        return True
    return False
