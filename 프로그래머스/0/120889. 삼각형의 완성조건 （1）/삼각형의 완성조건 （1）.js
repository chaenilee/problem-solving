


function solution(i){
    let acc = i;
    if(i === 1) return acc;
    acc *= i - 1;
    
    solution(i--);
}