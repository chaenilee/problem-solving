function solution(numbers) {
    let stack = [];
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let sum = numbers[i] + numbers[j];
            if(stack.includes(sum)) continue;
            stack.push(sum);
        }
    }
    
    return stack.sort((a, b) => a - b);
}