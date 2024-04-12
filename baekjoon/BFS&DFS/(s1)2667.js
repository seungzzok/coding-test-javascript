let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const size = parseInt(inputs.shift());
const map = inputs.map((item) => item.split("").map(Number));
const ans = [];

const BFS = (row, col) => {
  const nextRow = [-1, 1, 0, 0];
  const nextCol = [0, 0, -1, 1];
  const queue = [[row, col]];
  map[row][col] = 0;
  let cnt = 1;

  while (queue.length) {
    const [curRow, curCol] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nR = curRow + nextRow[i];
      const nC = curCol + nextCol[i];

      if (nC >= 0 && nR >= 0 && nC < size && nR < size && map[nR][nC] === 1) {
        map[nR][nC] = 0;
        queue.push([nR, nC]);
        cnt++;
      }
    }
  }

  ans.push(cnt);
};

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (map[i][j] === 1) {
      BFS(i, j);
    }
  }
}

console.log(ans.length);
console.log(ans.sort((a, b) => a - b).join("\n"));

// 메모
// 맞췄다ㅠㅠㅠ
// 제일 처음 BFS로 시작값을 받아올 때 map에서 0으로 값을 변경해주는 로직을 까먹어서 자꾸 틀렸었음
// 단순 숫자가 아니라 2차원 배열로 값을 관리해야 하는 경우에는 visited가 아니라 map으로 방문여부 관리해주는게 효율적
