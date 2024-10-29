def solution(n):
    acc = 0
    
    for i in range(n + 1):
        if i % 2 == 0:
            acc += i
            
    return acc