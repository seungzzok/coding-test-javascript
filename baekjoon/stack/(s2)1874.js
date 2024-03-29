let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el));

const stack = [];
let answer = [];
let stackNum = 1;

for (let i = 1; i <= inputs[0]; i++) {
  while (stackNum <= inputs[i]) {
    stack.push(stackNum);
    stackNum++;
    answer.push("+");
  }

  let stackPop = stack.pop();
  answer.push("-");

  if (stackPop !== inputs[i]) {
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));

// 메모
// 문제 이해가 조금 어려웠던 문제
// pop을 했을 때 나오는 배열을 나타내야하는 문제인데 설명이 조금 부족했었던것 같음
