let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const [N, M] = inputs.shift().split(" ").map(Number);
const map = inputs.map((item) => item.split("").map(Number));
const nextX = [-1, 1, 0, 0];
const nextY = [0, 0, -1, 1];

const BFS = (x, y) => {
  // x, y 출발좌표, 움직인 칸 수
  const queue = [[x, y, 1]];

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curX === M - 1 && curY === N - 1) return move;

    for (let i = 0; i < 4; i++) {
      const nX = curX + nextX[i];
      const nY = curY + nextY[i];

      if (nX >= 0 && nY >= 0 && nX < M && nY < N && map[nY][nX] === 1) {
        map[nY][nX] = 0;
        queue.push([nY, nX, move + 1]);
      }
    }
  }
};

console.log(BFS(0, 0));

// 메모
// 상하좌우 구할 때에는 다음 인덱스 값을 배열로 관리하기! => 훨씬 더 깔끔함
// row, col이 Y, X에 대한 값이므로 헷갈리지 않기!!
// 최단거리 구하는거는 반드시 BFS를 사용하고 X, Y값에 더해서 move에 대한 값도 처리해서 구하면 됨
