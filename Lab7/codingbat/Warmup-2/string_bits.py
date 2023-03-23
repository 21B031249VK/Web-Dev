def string_bits(string):
    i = 0
    s = ''
    while i < len(string):
        s += string[i]
        i += 2
    return s
