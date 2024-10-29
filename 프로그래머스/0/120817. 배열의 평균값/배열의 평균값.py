def solution(numbers):
    acc = 0
    
    for num in numbers:
        acc += num
        
    return acc / len(numbers)