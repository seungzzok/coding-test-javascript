const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;

rl.on("line", function (line) {
  input = line.split(" ").map((e) => parseInt(e));
  rl.close();
}).on("close", function () {
  const [a, b, c] = input;
  console.log((a + b) % c);
  console.log(((a % c) + (b % c)) % c);
  console.log((a * b) % c);
  console.log(((a % c) * (b % c)) % c);
  process.exit();
});
