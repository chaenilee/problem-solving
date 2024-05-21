function solution(n) {
    var answer = 0;
    let arr = [];
    
    for(let i = 1; i <= n; i++){
        if(Number.isInteger(n / i)){
            arr.push(i);
        }
    }
    console.log(arr)
    
    return arr.length;
 }