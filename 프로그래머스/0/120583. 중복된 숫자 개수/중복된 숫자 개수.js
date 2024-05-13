function solution(array, n) {
    let answer = array.filter(item => item === n);
    return answer.length;
}