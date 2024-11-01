function solution(arr) {
    let stack = [];
    
    for(let i = 0; i < arr.length; i++){
        if(stack[stack.length - 1] === arr[i]){
            stack.pop();  
        } else {
            stack.push(arr[i])
        }
    }
    
    return stack.length === 0 ? [-1] : stack;
}