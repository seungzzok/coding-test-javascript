let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = inputs[0].split(" ").map(Number);

// 인접행령 생성
const graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 1; i <= M; i++) {
  let [row, col] = inputs[i].split(" ").map(Number);
  graph[row][col] = 1;
  graph[col][row] = 1;
}

// DFS
const DFS_visited = new Array(N + 1).fill(false);
const DFS_answer = [];

const DFS = (v) => {
  DFS_visited[v] = true;
  DFS_answer.push(v);
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && !DFS_visited[i]) {
      DFS(i);
    }
  }
};

// BFS
const BFS_visted = new Array(N + 1).fill(false);
const BFS_answer = [];

const BFS = (v) => {
  const queue = [];
  BFS_visted[v] = true;
  BFS_answer.push(v);
  queue.push(v);
  while (queue.length) {
    let dequeue = queue.shift();
    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && !BFS_visted[i]) {
        BFS_visted[i] = true;
        queue.push(i);
        BFS_answer.push(i);
      }
    }
  }
};

DFS(V);
BFS(V);

console.log(DFS_answer.join(" "));
console.log(BFS_answer.join(" "));

// 메모
// DFS: 재귀함수를 사용해서 계속해서 파고들어서 입력
// BFS: 큐를 사용하여 순서대로 입력
// 알고리즘 어려워....ㅠ