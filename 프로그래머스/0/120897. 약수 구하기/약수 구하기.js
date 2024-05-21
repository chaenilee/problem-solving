function solution(n) {
    var answer = [];
    
    for(let i = 1; i <= n; i++){
        if(Number.isInteger(n / i)) answer.push(i)
    }
    
    return answer.sort((a, b) => a - b);
}