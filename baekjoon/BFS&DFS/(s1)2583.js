let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const [M, N, K] = inputs.shift().split(" ").map(Number);
let graph = Array.from(Array(M), () => new Array(N).fill(1));

for (let pos of inputs) {
  const [startC, startR, endC, endR] = pos.split(" ").map(Number);
  for (let r = startR; r < endR; r++) {
    for (let c = startC; c < endC; c++) {
      if (graph[r][c] === 1) graph[r][c] = 0;
    }
  }
}

const nextRow = [-1, 1, 0, 0];
const nextCol = [0, 0, -1, 1];
let ans = [];
let cnt = 0;

const DFS = (row, col) => {
  graph[row][col] = 0;
  cnt++;

  for (let i = 0; i < 4; i++) {
    const nR = row + nextRow[i];
    const nC = col + nextCol[i];
    if (nR >= 0 && nC >= 0 && nR < M && nC < N && graph[nR][nC] === 1) {
      DFS(nR, nC);
    }
  }
};

for (let r = 0; r < M; r++) {
  for (let c = 0; c < N; c++) {
    if (graph[r][c] === 1) {
      cnt = 0;
      DFS(r, c);
      ans.push(cnt);
    }
  }
}

console.log(ans.length);
console.log(ans.sort((a, b) => a - b).join(" "));

// 메모
// 와 이거 한번에 맞춤
// x,y로 나온다고 하더라도 row, col으로 변형해서 생각해야 안헷갈림!!
