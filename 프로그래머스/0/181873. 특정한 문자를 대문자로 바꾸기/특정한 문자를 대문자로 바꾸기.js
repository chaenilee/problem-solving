function solution(my_string, alp) {
    if(!my_string.includes(alp)) return my_string;
    
    let arr = my_string.split('');
    let answer = ''
    
    for(let str of arr){
        if(str === alp){
            str = str.toUpperCase();
         }
        answer += str; 
    }
    
    return answer;
}