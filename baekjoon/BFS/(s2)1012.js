let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

let graph = [];

const BFS = (row, col, M, N) => {
  const rowList = [0, 0, -1, 1];
  const colList = [-1, 1, 0, 0];

  const queue = [];
  queue.push([row, col]);

  while (queue.length) {
    const [R, C] = queue.shift();

    if (graph[R][C] === 0) continue;
    else graph[R][C] = 0;

    for (let i = 0; i < 4; i++) {
      const rowPos = R + rowList[i];
      const colPos = C + colList[i];

      if (rowPos < 0 || colPos < 0 || rowPos >= M || colPos >= N) continue;
      if (graph[rowPos][colPos] === 1) queue.push([rowPos, colPos]);
    }
  }
};

const caseNum = inputs.shift();

for (let i = 0; i < caseNum; i++) {
  let cnt = 0;
  const [M, N, K] = inputs.shift().split(" ").map(Number);
  graph = Array.from(Array(M), () => new Array(N).fill(0));

  for (let j = 0; j < K; j++) {
    const [row, col] = inputs.shift().split(" ").map(Number);
    graph[row][col] = 1;
  }

  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      if (graph[row][col] === 1) {
        BFS(row, col, M, N);
        cnt++;
      }
    }
  }

  console.log(cnt);
}

// 메모
// 아 이거 이해하는데 좀 걸렸네 맞췄는데 시간초과가 처음에 떴음. 이유로 3개를 테스트해봤는데
// 1. graph의 모든 열과 행을 비교하는게 시간이 오래걸린다고 생각함 -> 생각보다 차이 별로 안남
// 2. console.log를 하나에 모아서 할랬음 -> test case가 적은지 별 차이 안났음
// 3. 상하좌우인 경우에 대해 각각 if문을 작성했었는데 -> for문으로 4번 돌리나 직접 4번 돌리나 똑같음
// 이유: vistied를 관리를 안해주니까 1인 위치가 queue에 중복적으로 쌓이는 것 때문에 발생!!
// if (graph[R][C] === 0) continue; 을 사용해서 이미 0으로 바뀐것에 대해서는 상하좌우의 값을 비교하지 못하게 막음으로써 해결!!

// 전역에서 쓰이는 값(graph) 같은 것은 웬만하면 가장 상단에 let 타입으로 작성해주기!
