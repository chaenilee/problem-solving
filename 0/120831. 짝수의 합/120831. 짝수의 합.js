// https://school.programmers.co.kr/learn/courses/30/lessons/120831

function solution(n) {
    var answer = 0;
    
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            answer += i;
        }
    }
    return answer;
}

// 천재 코드 (수열)
function solution(n) {
    // floor()로 반값 구하기, 홀수일 때도 정확한 절반값
    var half = Math.floor(n/2); 

    // n(n + 1) 미친 천재냐
    return half*(half+1); // 
}


// let i = 2 로 해서 i+= 2 (2씩 증가시켜서) 반복 횟수 줄이기
function solution(n) {
    var answer = 0;
    
    for(let i = 2; i <= n; i+= 2){
        answer += i;
    }
    
    return answer;
}