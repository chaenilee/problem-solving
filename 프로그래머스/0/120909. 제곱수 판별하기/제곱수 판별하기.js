function solution(n) {
    var answer = 0;
    
    return Math.sqrt(n) !== Math.trunc(Math.sqrt(n)) ? 2 : 1;
}