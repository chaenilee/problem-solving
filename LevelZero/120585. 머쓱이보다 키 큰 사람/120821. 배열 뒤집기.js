// https://school.programmers.co.kr/learn/courses/30/lessons/120821

// 내 코드 1
function solution(num_list) {
    return num_list.reverse();
}

// 내 코드 2
function solution(num_list) {
    let answer = [];
    
    for(let i = num_list.length - 1; i >= 0 ; i--){
        answer.push(num_list[i])
    }
    
    return answer;
}

// 천재 코드
function solution(num_list) {
    let answer = [];

    for(let i = 1; i <= num_list.length ; i++){
        answer.push(num_list[num_list.length - i])
    }
    
    return answer;
}