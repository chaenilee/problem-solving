function solution(num_list) {
    var answer = 0;
    num_list.length >= 11 ? answer = 0 : answer = 1;   
    
    for(let num of num_list){
         num_list.length >= 11 ? answer += num : answer *= num;
    }
    return answer;
}