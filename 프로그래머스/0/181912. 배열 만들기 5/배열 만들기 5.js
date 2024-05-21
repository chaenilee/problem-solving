function solution(intStrs, k, s, l) {
    var answer = [];
    
    for(let i = 0; i < intStrs.length; i++){
        answer.push(+intStrs[i].slice(s, s+l));
    }
    
    return answer.filter(int => int > k);
}