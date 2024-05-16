function solution(numbers, n) {
    let cnt = 0;
    let i = 0;
    
    while(cnt <= n){
        cnt += numbers[i++]
    }
    
    return cnt;
}