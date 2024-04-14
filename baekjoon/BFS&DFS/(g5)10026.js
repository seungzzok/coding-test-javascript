let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputs.shift());
inputs = inputs.map((str) => str.split(""));

let coloredGraph = inputs.map((arr) =>
  arr.map((color) => {
    if (color === "R") return 1;
    if (color === "G") return 2;
    if (color === "B") return 3;
  })
);

let unColoredGraph = inputs.map((arr) =>
  arr.map((color) => {
    if (color === "R" || color === "G") return 1;
    if (color === "B") return 2;
  })
);

const nextRow = [-1, 1, 0, 0];
const nextCol = [0, 0, -1, 1];

const getAreaNum = (isColored) => {
  let graph = isColored ? coloredGraph : unColoredGraph;
  let cnt = 0;

  const DFS = (row, col, color) => {
    graph[row][col] = 0;

    for (let i = 0; i < 4; i++) {
      const nR = row + nextRow[i];
      const nC = col + nextCol[i];

      if (nR >= 0 && nC >= 0 && nR < N && nC < N && graph[nR][nC] === color) {
        DFS(nR, nC, color);
      }
    }
  };

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (graph[r][c] !== 0) {
        DFS(r, c, graph[r][c]);
        cnt++;
      }
    }
  }

  return cnt;
};

console.log(getAreaNum(true), getAreaNum(false));

// 메모
// 와 이것도 한방에 품ㅎㅎㅎ
// 진짜 이건 코드 잘짰음...