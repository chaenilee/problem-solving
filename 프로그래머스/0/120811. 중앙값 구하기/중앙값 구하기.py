def solution(array):
    center_idx = len(array) // 2 + 1
    
    sorted_arr = sorted(array)
    
    return sorted_arr[center_idx - 1]