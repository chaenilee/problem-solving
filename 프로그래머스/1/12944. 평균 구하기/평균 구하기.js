function solution(arr) {
    let cnt = 0;
    
    for(let num of arr){
        cnt += num;
    }
    
    return cnt / arr.length;
}