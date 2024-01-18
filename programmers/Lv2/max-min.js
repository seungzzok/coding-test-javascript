function solution(s) {
  const arr = s.split(" ").map((e) => parseInt(e));
  let max = arr[0];
  let min = arr[0];
  arr.forEach((e) => (max = Math.max(max, e)));
  arr.forEach((e) => (min = Math.min(min, e)));

  return `${min} ${max}`;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");
solution("-1 -1");

// 모범 답안
function best(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}

// 메모
// 구조분해 할당을 잘 사용하기
