let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputs[0]);
const M = parseInt(inputs[1]);

let graph = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));

for (let i = 2; i <= M + 1; i++) {
  const [row, col] = inputs[i].split(" ").map(Number);
  graph[row][col] = 1;
  graph[col][row] = 1;
}

let visited = new Array(N + 1).fill(false);
let cnt = 0;

const DFS = (v) => {
  visited[v] = true;
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && !visited[i]) {
      cnt++;
      DFS(i);
    }
  }
};

DFS(1);

console.log(cnt);

// 메모
// 오오... DFS 외워서 푸니까 되네 짱신기하당
// string을 number로 바꾸는 과정 꼭 까먹지 말고 넣어주기!
// 인접행렬 생성할 때 Array.from 형태로 사용해야 새로운 배열을 매번 생성해서 부여함
// new Array(N + 1).fill(new Array(N + 1).fill(0)) <- 이렇게 생성하면 하나의 같은 배열을 참조하게 됨