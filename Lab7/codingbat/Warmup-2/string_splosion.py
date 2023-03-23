def string_splosion(string):
    s = ''
    for i in range(len(string) + 1):
        s += string[0:i]
    return s
