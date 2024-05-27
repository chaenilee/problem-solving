let fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

function recursion(s, l, r) {
  count++;
  if (l >= r) {
    return 1;
  } else if (s[l] !== s[r]) {
    return 0;
  } else {
    return recursion(s, l + 1, r - 1);
  }
}

function isPalindrome(s) {
  return recursion(s, 0, s.length - 1);
}

let count = 0;
for (let i = 0; i < +input[0]; i++) {
  count = 0;
  let answer = 0;
  answer = isPalindrome(input[i + 1]);
  console.log(answer + ' ' + count);
}