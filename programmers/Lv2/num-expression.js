function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        cnt++;
        break;
      }
      if (sum > n) break;
    }
  }
  return cnt;
}

solution(15);

// 모범답안
function best(num) {
  var answer = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) {
      answer++;
    }
  }
  return answer;
}

// 메모
// 걍 이해안됨. 아니 그리고 내꺼 틀릴거 없는데 시간초과로 틀렸다 뜨거든?? 이거 좀 어이없네
