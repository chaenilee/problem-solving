function solution(my_string) {
    var stack = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(stack.includes(my_string[i])){
            continue;
        } else {
            stack.push(my_string[i])
        }
        console.log(stack)
    }
    
    return stack.join('');
}