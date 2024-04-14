let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const [R, C] = inputs.shift().split(" ").map(Number);
let graph = inputs.map((str) => str.split(""));
let visited = new Array(26).fill(false);

const nextRow = [-1, 0, 1, 0];
const nextCol = [0, 1, 0, -1];
let ans = 0;

const DFS = (row, col, cnt) => {
  ans = Math.max(ans, cnt);

  for (let i = 0; i < 4; i++) {
    const nR = row + nextRow[i];
    const nC = col + nextCol[i];

    if (nR >= 0 && nC >= 0 && nR < R && nC < C) {
      const alpIdx = graph[nR][nC].charCodeAt() - 65;

      if (!visited[alpIdx]) {
        visited[alpIdx] = true;
        DFS(nR, nC, cnt + 1);
        visited[alpIdx] = false;
      }
    }
  }
};

visited[graph[0][0].charCodeAt() - 65] = true;
DFS(0, 0, 1);

console.log(ans);

// 메모
// 아 알파벳 개수만큼 배열로 만들어서 방문여부를 결정하는 방법을 생각 못했네...
// 백트래킹이라는 알고리즘 지식도 들어간다는데 해당 내용도 공부해야겠다..
// charCodeAt으로 char코드에 대한 내용도 알아야하는건가...?

// 백트래킹
// 아마 DFS()로 들어가기전에 방문여부를 true로 만들었다가 끝날때 다시 false로 만드는 로직에 대한 내용일것 같음
