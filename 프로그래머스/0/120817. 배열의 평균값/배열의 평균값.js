function solution(numbers) {
    let answer = numbers.reduce((a, b) => a + b);
    
    return answer / numbers.length;
}