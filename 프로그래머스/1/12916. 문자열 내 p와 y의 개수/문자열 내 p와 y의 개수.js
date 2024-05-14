function solution(s){
    let arr = s.toUpperCase().split("");

    let pCnt = arr.filter(item => item === "P").length;
    let yCnt = arr.filter(item => item === "Y").length;
    
    if(pCnt === 0 && yCnt === 0) return true;
    else {
        return pCnt === yCnt ? true : false;
    }
}