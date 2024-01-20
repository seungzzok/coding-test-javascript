function solution(n) {
  const fibonacci = (num) => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  return fibonacci(n) % 1234567;
}

// 모범답안
function best(n) {
  let a = 0,
    b = 1,
    f = 1;
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

// 메모
// 아니 이거를 1234567로 왜 나누냐고 ㅁㅊ 솔직히 식에는 문제 없는데 자꾸 런타임 오류뜸
// 진짜 문제 드릅게 내네
