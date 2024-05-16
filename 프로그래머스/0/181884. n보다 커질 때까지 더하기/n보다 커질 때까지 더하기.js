function solution(numbers, n) {
    let cnt = 0;
    
    for(let i = 0; i < numbers.length; i++){
        if(cnt > n) break;
        cnt += numbers[i];
    }
    
    return cnt;
}