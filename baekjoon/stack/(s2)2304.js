let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const arr = inputs
  .slice(1)
  .map((str) => str.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);

const leftStack = [arr[0]];
const rightStack = [];
let ans = 0;

for (let i of arr) {
  // leftStack 채우기
  if (leftStack[leftStack.length - 1][1] < i[1]) {
    leftStack.push(i);
  }

  // rightStack 채우기
  while (rightStack.length) {
    if (rightStack[rightStack.length - 1][1] < i[1]) {
      rightStack.pop();
    } else break;
  }
  rightStack.push(i);
}

for (let i = 0; i < leftStack.length - 1; i++) {
  ans += (leftStack[i + 1][0] - leftStack[i][0]) * leftStack[i][1];
}

for (let i = 0; i < rightStack.length - 1; i++) {
  ans += (rightStack[i + 1][0] - rightStack[i][0]) * rightStack[i + 1][1];
}

ans += rightStack[0][1];

console.log(ans);

// 메모
// shift(): 배열에서 첫번째 요소를 제거하고 return
// 진짜 어렵네... 그래프에서 가장 높은 높이를 구하는 문제가 나오는 거면은 비교해서 현재의 높이보다 낮은거는 절대 stack에 넣지 않는 식으로 구현하기