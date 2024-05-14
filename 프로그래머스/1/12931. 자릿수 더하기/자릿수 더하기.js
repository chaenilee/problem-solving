function solution(n){
    let cnt = 0;
    let arr = (n + "").split("");
    
    for(let i = 0; i < arr.length; i++){
        cnt += Number(arr[i]);
    }

    return cnt;
}