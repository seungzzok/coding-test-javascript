function solution(n, a, b) {
  let ans = Math.log(n) / Math.log(2);
  let middle = n / 2;

  while ((a - (middle + 0.1)) * (b - (middle + 0.1)) > 0) {
    if (a > middle && b > middle) {
      a -= middle;
      b -= middle;
    }
    ans--;
    middle /= 2;
  }

  return ans;
}

solution(16, 9, 12);

// 모범답안
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

function solution(n, a, b) {
  var mid = (n + 1) / 2;

  if (a > mid && b < mid) {
    return Math.log2(n);
  } else if (a < mid && b > mid) {
    return Math.log2(n);
  } else {
    if (a < mid && b < mid) {
      return solution(n / 2, a, b);
    } else {
      return solution(n / 2, a - n / 2, b - n / 2);
    }
  }
}

// 메모
// 아 진짜 속도 좀 빨리 높여야겠다... 너무 오래걸림ㅠㅠ
// 지수 구하는 방법 Math.log(n) / Math.log(2) 기억해두기!!
