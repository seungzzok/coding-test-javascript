let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputs.shift());
let minH = 100;
let maxH = 0;
let ans = 1;

let map = inputs.map((str) =>
  str.split(" ").map((num) => {
    const n = +num;
    if (n > maxH) maxH = n;
    if (n < minH) minH = n;
    return n;
  })
);

const nextRow = [0, 0, -1, 1];
const nextCol = [-1, 1, 0, 0];

const DFS = (row, col, height, visited) => {
  visited[row][col] = true;

  for (let i = 0; i < 4; i++) {
    const nR = row + nextRow[i];
    const nC = col + nextCol[i];
    if (
      nR >= 0 &&
      nC >= 0 &&
      nR < N &&
      nC < N &&
      map[nR][nC] > height &&
      !visited[nR][nC]
    )
      DFS(nR, nC, height, visited);
  }
};

const getAreaNum = (height) => {
  let cnt = 0;
  let visited = Array.from(Array(N), () => new Array(N).fill(false));

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (map[r][c] > height && !visited[r][c]) {
        DFS(r, c, height, visited);
        cnt++;
      }
    }
  }

  return cnt;
};

for (let i = minH; i <= maxH; i++) {
  const cnt = getAreaNum(i);
  if (cnt > ans) ans = cnt;
}

console.log(ans);

// 메모
// 와씌 이거 내가 맞췄다... 비왔을 때 모든 높이에 대한 값들 중 가장 큰 거를 고르는거라는거 이해 못함...
// 아 백준 진짜 문제 좀 친절하게 적어달라고 문제 이해하는데 오래걸리네;;
// 아니 계속 틀리는 케이스가 나타나서 시도를 반복하다가 ans의 기본값을 1로 설정하면서 해결함!
