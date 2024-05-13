// https://school.programmers.co.kr/learn/courses/30/lessons/120813

function solution(n) {
    var answer = [];
    
    for(let i = 1; i <= n; i+=2){
        answer.push(i);
    }
    
    return answer;
}