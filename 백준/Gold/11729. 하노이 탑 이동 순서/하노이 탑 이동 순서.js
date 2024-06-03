let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let moveCount = 0;
let answer = "";

function hanoi(num, start, end){
  let other = 6 - start - end;
  moveCount++;

  if (num === 1) { 
    answer += `${start} ${end}\n`;
    return;

  } else {
    hanoi(num - 1, start, other);
    answer += `${start} ${end}\n`;
    hanoi(num - 1, other, end);
  }
}

hanoi(Number(input), 1, 3);
const output = `${moveCount}\n${answer}`
console.log(output);
