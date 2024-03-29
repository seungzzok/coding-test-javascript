let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("");

let ans = 0;
const stack = [];
const num = [];

for (let i = 0; i < inputs.length; i++) {
  if (inputs[i] === "(" || inputs[i] == "[") {
    stack.push(inputs[i]);
  } else {
    const lastTxt = stack[stack.length - 1];
    if (inputs[i] === ")") {
      if (lastTxt === "(") {
        stack.pop();
        stack.push(2);
      } else {
      }
    }
    if (inputs[i] === "]") {
      if (lastTxt === "[") {
        stack.pop();
        stack.push(3);
      } else {
      }
    }
  }
}
