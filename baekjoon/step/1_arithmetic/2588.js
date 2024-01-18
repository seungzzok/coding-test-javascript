const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;

rl.on("line", function (line) {
  input = line.split("\n").map((e) => parseInt(e));
  rl.close();
}).on("close", function () {
  const [a, b] = input;
  console.log(a * (b % 10));
  console.log(a * (parseInt(b / 10) % 10));
  console.log(a * parseInt(b / 100));
  console.log(a * b);
  process.exit();
});
