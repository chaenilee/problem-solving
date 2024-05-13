// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
    let maxNum = Math.max(...array);
    
    return [maxNum, array.indexOf(maxNum)];
}