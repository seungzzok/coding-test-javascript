let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const stack = [];

for (let i = 1; i <= inputs[0]; i++) {
  if (inputs[i] === "0") {
    stack.pop();
  } else {
    stack.push(inputs[i]);
  }
}

console.log(stack.reduce((sum, num) => (sum += parseInt(num)), 0));
