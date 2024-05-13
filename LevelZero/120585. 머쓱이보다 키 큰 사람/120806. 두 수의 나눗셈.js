// https://school.programmers.co.kr/learn/courses/30/lessons/120806

function solution(num1, num2) {
    return parseInt(num1 / num2 * 1000);
}

// Math.trunc() 함수는 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환합니다.
function solution(num1, num2) {
    return Math.trunc(num1 / num2 * 1000);
}