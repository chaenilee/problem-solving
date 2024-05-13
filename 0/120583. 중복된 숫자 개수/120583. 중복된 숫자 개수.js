// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
    var answer = 0;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === n) answer++;
    }
    
    return answer;
}

// filter()로 풀기
function solution(array, n) {
    let answer = array.filter(item => item === n);
    return answer.length;
}