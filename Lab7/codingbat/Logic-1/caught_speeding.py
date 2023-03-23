def caught_speeding(speed, is_birthday):
    if is_birthday:
        if speed > 85:
            return 2
        elif speed > 65:
            return 1
        return 0
    else:
        if speed > 80:
            return 2
        elif speed > 60:
            return 1
        return 0
