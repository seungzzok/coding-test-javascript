let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

for (let i of inputs) {
  if (i === ".") break;
  const stack = [];
  let result = "yes";

  for (let j of i) {
    if (j === "(" || j === "[") {
      stack.push(j);
    } else if (j === ")" || j === "]") {
      const check = stack.pop() + j;
      if (check !== "()" && check !== "[]") {
        result = "no";
        break;
      }
    }
  }

  if (stack.length !== 0) result = "no";

  console.log(result);
}

// 메모
// 아 놔 이거 진짜 쉬운건데 24줄에서 result === 'no'라고 적어서 진짜 계속 틀렸음;;;
// for (let j of i) 이거 사용할 때 i부분이 배열이 아니라 string이어도 char로 반복문이 진행됨