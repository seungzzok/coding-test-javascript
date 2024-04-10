let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const len = inputs.shift();
let minheap = [];
let answer = [];

const insert = (heap, num) => {
  heap.push(num);
  let idx = heap.length;

  while (idx > 1) {
    if (heap[Math.floor(idx / 2) - 1] > heap[idx - 1]) {
      const temp = heap[idx - 1];
      heap[idx - 1] = heap[Math.floor(idx / 2) - 1];
      heap[Math.floor(idx / 2) - 1] = temp;
      idx = Math.floor(idx / 2);
    } else {
      break;
    }
  }

  return heap;
};

const remove = (heap) => {
  heap[0] = heap[heap.length - 1];
  heap.pop();
  const len = heap.length;
  let idx = 1;

  while (idx * 2 <= len) {
    if (
      heap[idx - 1] > heap[idx * 2 - 1] &&
      (heap[2 * idx] === undefined || heap[idx * 2 - 1] < heap[idx * 2])
    ) {
      const temp = heap[idx * 2 - 1];
      heap[idx * 2 - 1] = heap[idx - 1];
      heap[idx - 1] = temp;
      idx = idx * 2;
    } else if (heap[idx - 1] > heap[idx * 2]) {
      const temp = heap[idx * 2];
      heap[idx * 2] = heap[idx - 1];
      heap[idx - 1] = temp;
      idx = idx * 2 + 1;
    } else break;
  }
  return heap;
};

inputs.forEach((value) => {
  if (value === 0) {
    if (minheap.length > 0) {
      answer.push(minheap[0]);
      minheap = remove(minheap);
    } else {
      answer.push(0);
    }
  } else minheap = insert(minheap, value);
});

console.log(answer.join("\n"));

// 메모
// (1차) 메모리 초과 -> 배열을 string으로 변경안하고 그대로 출력함
// (2차) 메모리 초과 -> string으로 해도 여전히 초과
// (3차) 답지 참고 -> 최소힙이라는 알고리즘 사용해서 푸는 문제인데 이거 어떻게 외워...? 말도안돼

// 내 풀이 (메모리 초과)
// const len = inputs.shift();
// const queue = [];
// const ans = [];

// for (let i of inputs) {
//   if (i === 0) {
//     if (queue.length) {
//       const min = queue.sort((a, b) => a - b).shift();
//       ans.push(min);
//     } else {
//       ans.push(0);
//     }
//   } else {
//     queue.push(i);
//   }
// }

// console.log(ans.join("\n"));
