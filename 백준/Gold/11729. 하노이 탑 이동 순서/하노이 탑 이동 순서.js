let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const solution = (input) => {
  let callHanoiCnt = 0;
  let paths = [];

  const hanoi = (disk, from, to) => {
    let via = 6 - (from + to);

    if (disk === 1) {
      callHanoiCnt ++;
      paths.push(`${from} ${to}`);
      return;
    }

    hanoi(disk - 1, from, via);
    // cnt를 1로 재호출한 것 very interesting
    // 그치만 호출보다 직접 path.push 방법이 좋을 것 같다
    hanoi(1, from, to);
    hanoi(disk - 1, via, to);
  };

  hanoi(input, 1, 3);

  return `${callHanoiCnt}\n${paths.join("\n")}`;
};

const answer = solution(Number(input));
console.log(answer);
