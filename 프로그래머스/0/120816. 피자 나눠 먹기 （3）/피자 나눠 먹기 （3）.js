function solution(slice, n) {
    if(n % slice !== 0){
        return (n - n % slice) / slice + 1
    }
    
    return n / slice;
}