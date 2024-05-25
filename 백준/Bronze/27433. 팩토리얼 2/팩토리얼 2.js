let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
//let input = require('fs').readFileSync('example.txt').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);

function fact(n){
    if(n <= 1) return 1;
    return n * fact(n - 1);
}

console.log(fact(input));