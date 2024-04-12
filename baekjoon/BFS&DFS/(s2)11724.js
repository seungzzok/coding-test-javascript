let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs.shift().split(" ").map(Number);

let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
let visited = new Array(N + 1).fill(false);
let ans = 0;

for (let arr of inputs) {
  const [row, col] = arr.split(" ").map(Number);
  graph[row][col] = 1;
  graph[col][row] = 1;
}

const BFS = (pos) => {
  const queue = [];
  queue.push(pos);
  visited[pos] = true;

  while (queue.length) {
    const dequeue = queue.shift();
    for (let i = 1; i <= N; i++) {
      if (graph[dequeue][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
};

for (let i = 1; i < N + 1; i++) {
  if (!visited[i]) {
    BFS(i);
    ans++;
  }
}

console.log(ans);

// 메모
// BFS 원리를 좀 더 문제를 풀면서 확실히 외우자...!
// 그래도 어느정도 원리에 대한 이해는 생긴 느낌
// 숫자가 하나일 때는 graph를 0으로 바꾸면서 가지는 로직보다 visited로 관리하는게 좀 더 간단함
