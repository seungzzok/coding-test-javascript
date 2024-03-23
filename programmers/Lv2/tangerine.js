// 풀이 1
function solution(k, tangerine) {
  const obj = {};
  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  let answer = 0;
  const kind = Object.values(obj).sort((a, b) => b - a);

  for (let num of kind) {
    k -= num;
    answer++;
    if (k <= 0) break;
  }

  return answer;
}

solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);

// 메모
// 객체 관련된 메소드 정리한번 해야할듯...! 제발 익숙해지자ㅠㅠ
// 이후에 한번 더 풀이 필요