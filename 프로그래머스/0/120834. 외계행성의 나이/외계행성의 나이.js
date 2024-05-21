function solution(age) {
    var answer = '';
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let ageArr = (age+"").split('');
    
    for(let i = 0; i < ageArr.length; i++){
        answer += alpha[Number(ageArr[i])];
    }
    
    return answer;
}