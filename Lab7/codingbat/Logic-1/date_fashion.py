def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0
    elif you < 8 and date < 8:
        return 1
    return 2
