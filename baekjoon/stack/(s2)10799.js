let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("");

const stack = [];
let ans = 0;

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === "(") {
    stack.push(1);
  } else if (inputs[i] === ")") {
    stack.pop();
    if (inputs[i - 1] === "(") {
      ans += stack.length;
    } else {
      ans++;
    }
  }
}

console.log(ans);

// 메모
// 맞췄어 드디어ㅠㅠㅠㅠ