let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const left = inputs[0].split("");
const right = [];

for (let i = 2; i < inputs.length; i++) {
  const [command, value] = inputs[i].split(" ");

  switch (command) {
    case "L":
      if (left.length !== 0) {
        right.push(left.pop());
      }
      break;
    case "D":
      if (right.length !== 0) {
        left.push(right.pop());
      }
      break;
    case "B":
      if (left.length !== 0) {
        left.pop();
      }
      break;
    case "P":
      left.push(value);
      break;
  }
}

console.log(left.concat(right.reverse()).join(""));

// 메모
// 진짜 상상초월이네.... 커서를 기준으로 왼쪽 오른쪽 배열을 각각 둬서 최대한 push, pop으로만 해결
// slice, split과 같은 내장함수들을 사용하면 시간이 많이 듦


// 내 풀이
// const text = inputs[0].split("");
// let idx = text.length;

// for (let i = 2; i < inputs.length; i++) {
//   if (inputs[i] === "L" && idx > 0) {
//     idx--;
//   } else if (inputs[i] === "D" && idx < inputs.length) {
//     idx++;
//   } else if (inputs[i] === "B" && idx > 0) {
//     text.splice(idx - 1, 1);
//     idx--;
//   } else if (inputs[i].charAt(0) === "P") {
//     text.splice(idx, 0, inputs[i].charAt(2));
//     idx++;
//   }
// }

// console.log(text.join(""));
