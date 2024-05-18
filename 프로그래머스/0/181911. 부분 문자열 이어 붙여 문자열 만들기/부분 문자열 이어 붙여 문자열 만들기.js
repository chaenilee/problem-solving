function solution(my_string, parts) {
    var answer = '';

    for(let i = 0; i < my_string.length; i++){
        answer += my_string[i].slice(parts[i][0], parts[i][1] + 1)
    }
    
    return answer;
}