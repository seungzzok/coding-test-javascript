let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim();

let stack = [];
const ans = [];
let isOpen = false;

for (let i of inputs) {
  if (isOpen) {
    stack.push(i);
    if (i === ">") {
      ans.push(stack.join(""));
      stack = [];
      isOpen = false;
    }
  } else if (i === "<") {
    ans.push(stack.reverse().join(""));
    stack = [i];
    isOpen = true;
  } else if (i === " ") {
    ans.push(stack.reverse().join(""));
    ans.push(" ");
    stack = [];
  } else {
    stack.push(i);
  }
}

if (stack.length !== 0) ans.push(stack.reverse().join(""));

console.log(ans.join(""));

// 메모
// 아싸 한번에 맞췄다ㅎㅎ