let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let a = parseInt(input);

function fibo(n){
    if(n <= 1) return n;
    return fibo(n-2) + fibo(n-1);
}

console.log(fibo(a));