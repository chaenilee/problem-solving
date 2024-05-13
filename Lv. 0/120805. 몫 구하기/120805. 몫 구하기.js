// https://school.programmers.co.kr/learn/courses/30/lessons/120805

function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

function solution(num1, num2) {
    return ~~(num1 / num2); 
    // ~~ 연산자는 소수점 이하의 값을 버리고 정수 부분만 남기는 역할을 합니다. (~가 하나만 있을 경우에는 -(n+1)을 합니다.)
}