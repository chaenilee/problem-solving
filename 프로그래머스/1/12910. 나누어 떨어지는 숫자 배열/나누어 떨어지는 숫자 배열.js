function solution(arr, divisor) {
    let answer = arr.filter(x => x % divisor === 0).sort((a,b) => a-b)
    
    return answer.length > 0 ? answer : [-1];
}