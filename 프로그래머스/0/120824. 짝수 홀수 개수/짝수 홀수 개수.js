function solution(num_list) {
    var odd = [];
    var even = [];
    
    for(num of num_list){
        num % 2 === 0 ? even.push(num) : odd.push(num);
    }
    
    
    
    return [even.length, odd.length];
}