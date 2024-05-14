function solution(n) {
    var answer = 0;
    let cnt = 0;
    
    for(let i = 1; i <= n; i++){
        n % i === 0 ? cnt += i : cnt;  
    }
    
    return cnt;
}