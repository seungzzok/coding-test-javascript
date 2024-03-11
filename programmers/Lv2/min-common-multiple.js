function solution(arr) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return arr.reduce((lcm, num) => (lcm * num) / gcd(lcm, num));
}

solution([1, 2, 3]);

// 모범 답안
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

// 메모
// 최대공약수, 최소공배수 구하는 공식은 그냥 외우자!
// 최대공약수: 재귀함수를 이용해서 나머지가 0이 나올 때까지 반복 나눗셈
// 최소공배수: (a * b) / a,b의 최대공약수
