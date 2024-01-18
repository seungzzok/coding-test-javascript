const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;

rl.on("line", function (line) {
  input = parseInt(line);
  rl.close();
}).on("close", function () {
  console.log(input - (2541 - 1998));
  process.exit();
});
