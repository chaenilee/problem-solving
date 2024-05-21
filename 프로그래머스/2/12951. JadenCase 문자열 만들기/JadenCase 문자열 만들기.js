function solution(s) {
    let stack = [];
    let str = s.toLowerCase();
    
    for(let i = 0; i < str.length; i++){
        if(stack[stack.length - 1] === " " || stack.length === 0){
            stack.push(str[i].toUpperCase());
        } else {
            stack.push(str[i]);
        }
    }
    
    return stack.join('')
}