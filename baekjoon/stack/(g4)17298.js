let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

let [len, numbers] = inputs;
numbers = numbers.split(" ").map(Number);
const stack = [];

for (let i = 0; i < len; i++) {
  // 현재 값보다 작은 값이 stack에 존재한다면 현재 값으로 대체
  while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
    numbers[stack.pop()] = numbers[i];
  }
  stack.push(i);
}

// 끝까지 제거되지 않은 index를 한번에 -1로 변형
while (stack.length) {
  numbers[stack.pop()] = -1;
}

console.log(numbers.join(" "));

// 메모
// 산술문제 나오면은 꼭 반드시 number로 변형해주는 과정 까먹지 말고 넣기!!!
// string으로 계산하려고 해서 처음에 틀렸었음
// 답지 로직: 현재를 기준으로 이전에 있던 값들중에서 현재 값보다 작은 것들을 현재 값으로 넣어주는 방식
// 순서대로 값을 처리하는 것이 아니라 index 별로 값을 처리했다는게 너무 신기함...

// 유용한 input 처리방법
// [n, numbers] = input;

// ========== 내 풀이 (시간초과) ==========
// const len = inputs.shift();
// inputs = inputs[0].split(" ").map(Number);
// const stack = [];

// for (let i = 0; i < len - 1; i++) {
//   for (let j = i + 1; j < len; j++) {
//     if (inputs[i] < inputs[j]) {
//       stack.push(inputs[j]);
//       break;
//     } else if (j === len - 1) {
//       stack.push(-1);
//       break;
//     }
//   }
// }
// stack.push(-1);

// console.log(stack.join(" "));
