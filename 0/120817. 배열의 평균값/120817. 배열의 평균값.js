// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
    let answer = 0;
    for(let i = 0; i < numbers.length; i++){
        answer += numbers[i]
    }
    
    return answer / numbers.length;
}

// 반복문 let ** of **
function solution(numbers) {
    let answer = 0;
    for(let i of numbers){
        answer += i;
    }
    
    return answer / numbers.length;
}

// reduce() 메소드
function solution(numbers) {
    let answer = numbers.reduce((a, b) => a + b);
    
    return answer / numbers.length;
}