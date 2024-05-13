// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
    let answer = (array.sort((a, b) => a - b))
    return answer[Math.floor(array.length / 2)];
}