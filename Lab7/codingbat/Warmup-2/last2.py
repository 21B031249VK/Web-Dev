def last2(string):
    n = 0
    s = string[len(string) - 2:len(string)]
    for i in range(len(string) - 2):
        if string[i] == s[0] and string[i + 1] == s[1]:
            n += 1
    return n
