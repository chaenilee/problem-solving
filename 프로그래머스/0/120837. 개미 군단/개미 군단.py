def solution(hp):    
    ant_num = 0
        


    ant_num += hp // 5
    hp%= 5
    
    ant_num += hp // 3
    hp%=3 
        
    ant_num += hp
    
    return ant_num