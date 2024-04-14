let inputs = require("fs")
  .readFileSync(__dirname + "/input.txt") // '/dev/stdin'
  .toString()
  .trim()
  .split("\n");

const N = parseInt(inputs.shift());
const graph = Array.from(Array(N + 1), () => []);
const visited = new Array(N + 1).fill(false);
const ans = new Array(N + 1);

for (let node of inputs) {
  const [a, b] = node.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const DFS = (num) => {
  if (visited[num]) return;

  visited[num] = true;
  for (let i of graph[num]) {
    if (!visited[i]) {
      ans[i] = num;
      DFS(i);
    }
  }
};

DFS(1);

console.log(ans.slice(2).join("\n"));

// 메모
// 노드: 점을 말하는 거였음, 정점: 선을 잇는 점들을 지칭
// 문제 이해하느라 한참 걸렸네;; 아니 문제 왤캐 대충 적어주는거야

// 하 참내... 이거 0으로 전부 넣고 연결되어있는 노드에만 1을 넣는 그래프가 또 오래걸린데;;
// 그냥 제일 빠른거는 그냥 그 노드랑 연결되어있는 노드만을 배열로 넣어서 그 배열에서 골라내는 방식으로 가자 그냥
