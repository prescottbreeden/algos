def list_factors2(num):
    res = ([int(num/i) for i in range(2, int(num)) if (num/i).is_integer()])
    return res[::-1]


def list_factors(num, left_side=None, right_side=None):
    if left_side is None:
        left_side = []
    factors = []
    for i in range(2, int(num)):
        if (num/i).is_integer():
            factors.append(i)
    factors = factors[::-1]
    if factors:
        left_side.append(int(num/factors[0]))
        right_side = factors[0]
        list_factors(factors[0], left_side, right_side)
    else:
        left_side.append(right_side)
        print(left_side)


list_factors(28)
