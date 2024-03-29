let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const stack = [];
const answer = [];

for (let i = 1; i <= parseInt(inputs[0]); i++) {
  const input = inputs[i].split(" ");

  switch (input[0]) {
    case "push":
      stack.push(input[1]);
      break;
    case "pop":
      answer.push(stack.pop() || -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case "top":
      answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
      break;
  }
}

console.log(answer.join("\n"));

// 메모
// console.log()는 시간이 오래 걸리므로 자주 사용하는것이 아니라 마지막에 한번만 출력하도록 해야함!!!
// 처음에 case별로 console.log()를 입력했다가 시간초과가 떴음
