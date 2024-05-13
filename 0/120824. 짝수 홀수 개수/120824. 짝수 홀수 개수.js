// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
    let odd = [];
    let even = [];
    
    for(num of num_list){
        num % 2 === 0 ? even.push(num) : odd.push(num);
    }
    
    return [even.length, odd.length];
}

// 천재 코드
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a % 2] += 1
    }

    return answer;
}