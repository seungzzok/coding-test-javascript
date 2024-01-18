const fs = require("fs");
const input = fs
  .readFileSync("./step/1_arithmetic/input.txt")
  .toString()
  .split(" ")
  .map((e) => parseInt(e));

const [a, b] = input;

console.log(a - b);
