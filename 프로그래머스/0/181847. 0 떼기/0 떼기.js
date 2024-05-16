function solution(n_str) {
    var answer = '';
    let arr = n_str.split('');
    
    while(arr[0] === "0"){
        arr.shift();
    }
    return arr.join('');
}