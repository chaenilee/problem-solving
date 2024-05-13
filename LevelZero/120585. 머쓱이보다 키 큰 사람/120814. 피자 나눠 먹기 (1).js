// https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) { 
    return n % 7 === 0 ? n / 7 : Math.floor( n / 7 )+ 1; 
}

function solution(n) { 
    return Math.ceil(n / 7); 
}