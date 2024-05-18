function solution(myString, pat) {
    var answer = myString.replaceAll("A", "X").replaceAll("B", "A").replaceAll("X", "B");
    
    return answer.includes(pat) ? 1 : 0;
}