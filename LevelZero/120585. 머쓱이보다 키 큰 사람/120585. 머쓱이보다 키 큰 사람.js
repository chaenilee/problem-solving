// https://school.programmers.co.kr/learn/courses/30/lessons/120585

function solution(array, height) {
    let arr = array.filter(elm => elm > height);   
    return arr.length;
}