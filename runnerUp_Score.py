    n = int(input())
    arr = list(map(int, input().split()))
    
    arr = sorted(arr, reverse=True)
    
    maxNum = arr[0]
    
    for x in arr:
        if x < maxNum:
            print(x)
            break