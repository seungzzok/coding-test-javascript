let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("");

const stack = [];

const checkPossible = (arr) => {
  for (i of arr) {
    const lastTxt = stack[stack.length - 1];
    const isRightCouple =
      (i === ")" && lastTxt === "(") || (i === "]" && lastTxt === "[");
    if (isRightCouple) {
      stack.pop();
    } else {
      stack.push(i);
    }
  }

  return stack.length === 0;
};

if (!checkPossible(inputs)) {
  console.log(0);
  return;
}

for (let i of inputs) {
  const lastTxt = stack[stack.length - 1];
  const reverse = i === ")" ? "(" : "[";
  const point = i === ")" ? 2 : 3;

  if (i === "(" || i == "[") {
    stack.push(i);
  } else {
    if (lastTxt === reverse) {
      stack.pop();
      stack.push(point);
    } else {
      let temp = 0;
      while (1) {
        const pop = stack.pop();
        if (typeof pop === "number") {
          temp += pop;
        } else if (pop === reverse) {
          stack.push(temp * point);
          break;
        }
      }
    }
  }
}

console.log(stack.reduce((sum, num) => (sum += num)));

// 메모
// 거의 다 풀었었는데 집중력 떨어져서 결국 마지막엔 답지보고 품ㅠ
// stack에 있는 값이 숫지안 경우를 판단하기 위해 type of 사용하는거 기억하기!