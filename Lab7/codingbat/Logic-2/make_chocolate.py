def make_chocolate(small, big, goal):
    if goal >= 5 * big:
        n = goal - 5 * big
    else:
        n = goal % 5

    if n <= small:
        return n

    return -1
