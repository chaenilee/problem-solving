function solution(n, control) {
    let cnt = n;
    
    for(let str of control){
        if(str === "w"){
            cnt++;
        } else if(str === "s"){
            cnt--;
        } else if(str === "d"){
            cnt += 10;
        } else {
            cnt -= 10;
        }
    }
    return cnt;
}