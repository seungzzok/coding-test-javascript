function solution(n) {
  let ans = 0;

  while (n > 1) {
    if (n % 2 == 1) {
      ans++;
    }
    n = Math.floor(n / 2);
  }

  return ans + 1;
}

// 모범답안
function solution(n) {
  if (n === 1) return 1;
  const nArr = Array.from(n.toString(2));
  return nArr.reduce((a, b) => +a + +b);
}

// 메모
// 와... 이진수... 다음에 써먹을 수 있으면 써먹어야지. 2로 나눈 나머지를 구하고 싶을 때에는 이진수 사용!
