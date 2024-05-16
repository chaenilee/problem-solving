function solution(num_list) {
    let multSum = num_list.reduce((acc, cur) => acc * cur);
    let addSum = num_list.reduce((acc, cur) => acc + cur); 
    
    return multSum < addSum ** 2 ? 1 : 0;
}