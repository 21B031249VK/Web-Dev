def make_bricks(small, big, goal):
    if goal >= 5 * big:
        n = goal - 5 * big
    else:
        n = goal % 5
    if n <= small:
        return True
    return False
