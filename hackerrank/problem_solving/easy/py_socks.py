def pairSocks(arr=[1,2,3,4,5]):
    socks = {}
    pairs = 0

    for i in arr:
        if arr[i] not in socks:
            socks[arr[i]] = 1
        else:
            socks[arr[i]] += 1
            if socks[arr[i]] % 2 is 0:
                    pairs += 1
    print(pairs)


pairSocks([1,2,3,4,5,1,2,3,4,5,6])
