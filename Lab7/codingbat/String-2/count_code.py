def count_code(string):
    n = 0
    for i in range(len(string) - 3):
        if string[i] == 'c' and string[i + 1] == 'o' and string[i + 3] == 'e':
            n += 1
    return n
