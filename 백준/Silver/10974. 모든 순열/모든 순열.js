let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input);

let arr = [];

function recursive(n){
  // 스택 계속 초기화
  let stack = [];

  // for문 무대뽀 돌리기
  function recursiveFor(){
     // 스택 n만큼 차면 arr에 푸시하고 다음 숫자
    if(stack.length === n){
      arr.push(stack.slice()); 
      return;
    }

    for(let i = 1; i <= n; i++){
      if(stack.includes(i)) continue;
      stack.push(i);
      // 다음 숫자 넣기 => 자기자신 있는지, length 찼는지 계속확인
      recursiveFor();
      stack.pop(); // 뭐지 왜지?
    }
  }
  recursiveFor();
}

function solution(n){
  recursive(n);

  let output = `${arr.join('\n').replaceAll(',', " ")}`;
  return output;
}

console.log(solution(a))