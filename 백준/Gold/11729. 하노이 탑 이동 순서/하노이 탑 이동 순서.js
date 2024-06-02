const input = require("fs").readFileSync("/dev/stdin").toString().trim();

answer = "";
const recursion = (n, from, temp, to) => {
  if (n === 1) {
    answer += `${from} ${to}\n`;
    return;
  }
  recursion(n - 1, from, to, temp);
  answer += `${from} ${to}\n`;
  recursion(n - 1, temp, from, to);
};

const hanoiTop = (n, from, temp, to) => {
  console.log(2 ** n - 1);
  recursion(n, from, temp, to);
};
hanoiTop(Number(input), 1, 2, 3);
console.log(answer);
