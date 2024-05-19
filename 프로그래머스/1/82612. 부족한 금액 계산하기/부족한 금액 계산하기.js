function solution(price, money, count) {
    let cnt = 0;
    
    for(let i = 1; i < count+1; i++){
        cnt += price * i
    }
    
    return money - cnt < 0 ? -(money - cnt) : 0;
}