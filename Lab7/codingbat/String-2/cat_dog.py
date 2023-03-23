def cat_dog(string):
    c = 0
    d = 0
    for i in range(len(string) - 2):
        if string[i] == 'c' and string[i + 1] == 'a' and string[i + 2] == 't':
            c += 1
        elif string[i] == 'd' and string[i + 1] == 'o' and string[i + 2] == 'g':
            d += 1
    if c == d:
        return True
    else:
        return False
