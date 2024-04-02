let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const getIndex = (char) => {
  return char.charCodeAt(0) - "A".charCodeAt(0) + 2;
};

const stack = [];

for (let i of inputs[1]) {
  if (i >= "A" && i <= "Z") {
    const idx = getIndex(i);
    stack.push(parseInt(inputs[idx]));
  } else {
    const secondNum = stack.pop();
    const firstNum = stack.pop();

    switch (i) {
      case "*":
        stack.push(firstNum * secondNum);
        break;
      case "+":
        stack.push(firstNum + secondNum);
        break;
      case "/":
        stack.push(firstNum / secondNum);
        break;
      case "-":
        stack.push(firstNum - secondNum);
        break;
    }
  }
}

console.log(stack[0].toFixed(2));

// 메모
// 후위표기식에 대해서 공부해놓자!! 처음 접해보는 방식

// 후위표기식 to 중위표기식
// 숫자를 처음부터 꺼내서 stack에 넣고 연산자가 나오면 뒤의 두개의 숫자를 불러와서 연산한 후 다시 stack에 넣는걸 반복
