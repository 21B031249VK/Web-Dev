def not_string(string):
    l = string.split()
    if l[0] == "not":
        return string
    else:
        return "not " + string
