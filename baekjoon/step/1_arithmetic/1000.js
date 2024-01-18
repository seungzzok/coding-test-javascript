const fs = require("fs");
const inputData = fs
  .readFileSync("./step/1_arithmetic/input.txt")
  .toString()
  .split(" ")
  .map((value) => +value);

const [a, b] = inputData;

console.log(a + b);
