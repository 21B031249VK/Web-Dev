def count_hi(string):
    n = 0
    for i in range(len(string) - 1):
        if string[i] == 'h' and string[i + 1] == 'i':
            n += 1
    return n
