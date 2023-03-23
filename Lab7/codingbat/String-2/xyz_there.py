def xyz_there(string):
    b = False
    if string[:3] == 'xyz':
        return True
    for i in range(1, len(string) - 2):
        if string[i:i + 3] == 'xyz' and string[i - 1] != '.':
            b = True
            break
    return b
