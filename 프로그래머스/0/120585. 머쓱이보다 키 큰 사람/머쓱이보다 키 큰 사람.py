def solution(array, height):
    cnt = 0
    
    for item in array:
        if height - item < 0:
            cnt += 1
            
    return cnt