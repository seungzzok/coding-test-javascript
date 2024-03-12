function solution(n) {
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

// 답안지 보고 작성

// 메모
// 피보나치 수열인거 어떻게 생각하냐고요...;;
// 피보나치 수열 외우기