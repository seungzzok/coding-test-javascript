const range = 10000;
let isSelfNum = Array(range + 1).fill(true);

const Constructor = (n) => {
  const sum = String(n)
    .split("")
    .map(Number)
    .reduce((sum, num) => (sum += num), 0);

  return n + sum;
};

for (let i = 1; i < range; i++) {
  isSelfNum[Constructor(i)] = false;
}

isSelfNum.forEach((isSelfNum, idx) => {
  if (isSelfNum && idx > 0) console.log(idx);
});
