let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const ans = [];

for (let i = 1; i <= inputs[0]; i++) {
  const right = [];
  const left = [];

  for (let j of inputs[i]) {
    if (j === "<") {
      if (left.length !== 0) {
        right.push(left.pop());
      } else continue;
    } else if (j === ">") {
      if (right.length !== 0) {
        left.push(right.pop());
      } else continue;
    } else if (j === "-") {
      left.pop();
    } else {
      left.push(j);
    }
  }
  ans.push(left.concat(right.reverse()).join(""));
}

console.log(ans.join("\n"));
