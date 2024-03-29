let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

// 내 풀이
// const towers = inputs[1].split(" ").map((el) => parseInt(el));
// const answer = [0];
// let highestTower = { idx: 0, height: 0 };

// for (let i = 1; i < parseInt(inputs[0]); i++) {
//   for (let j = i - 1; j >= highestTower.idx; j--) {
//     if (towers[j] >= towers[i]) {
//       answer.push(j + 1);
//       if (towers[j] >= highestTower.height) {
//         highestTower.idx = j;
//         highestTower.height = towers[j];
//       }
//       break;
//     } else if (j === highestTower.idx) {
//       answer.push(0);
//     }
//   }
// }

// console.log(answer.join(" "));

const towers = inputs[1].split(" ").map((el) => +el);
const stack = [];
const answer = [];

for (let i = 0; i < parseInt(inputs[0]); i++) {
  const item = {
    index: i + 1,
    value: towers[i],
  };

  if (i === 0) {
    stack.push(item);
    answer.push(0);
    continue;
  }

  while (stack.length > 0 && stack[stack.length - 1].value < towers[i]) {
    stack.pop();
  }

  if (stack.length === 0) {
    answer.push(0);
  } else {
    answer.push(stack[stack.length - 1].index);
  }
  stack.push(item);
}

console.log(answer.join(" "));

// 메모
// parseInt()를 통해서 number 타입으로 변형도 가능하지만 '+' 연산자만 붙여서 number 타입으로 변형도 가능
// map(Number) 이라고 해도 전부 number타입으로 변경
// 중첩 for문을 쓰면 시간이 오래걸리기도 하고 이전의 타워들을 전부 비교하느라 시간초과가 떴었음
// 최대한 stack을 이용해서 문제를 풀어야하는데 존나 드릅게 어렵네 아직도 이해 잘 안됨...
// 로직: 현재 tower의 가장 인접한 타워들 중 가장 높이가 높은 타워부터 stack에 저장해서 비교