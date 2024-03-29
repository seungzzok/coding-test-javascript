let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= parseInt(inputs[0]); i++) {
  const arr = inputs[i].split("");
  const stack = [];
  let result = "YES";

  for (let j of arr) {
    if (j === "(") {
      stack.push(1);
    } else {
      if (!stack.pop()) {
        result = "NO";
        break;
      }
    }
  }

  if (stack.length !== 0) {
    result = "NO";
  }

  console.log(result);
}

// 메모
// pop()을 사용했을 때 제거할 값이 있었던 경우 true, 없는 경우 false를 return
// 하나씩 넣어서 값을 검증하는 알고리즘을 DFS, stack
