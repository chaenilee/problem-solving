// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
    if(dot[0] > 0){
        if(dot[1] > 0){
            return 1;
        } else {
            return 4;
        }
    } else {
        if(dot[1] > 0){
            return 2;
        } else {
            return 3;
        }
    }
}

// 천재 코드

function solution(dot) {
    const [x, y] = dot;
    const check = x * y > 0;
    
    return x > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}