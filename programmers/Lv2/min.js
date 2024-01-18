function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((el, idx) => (answer += el * B[idx]));
  console.log(answer);

  return answer;
}

solution([1, 2], [3, 4]);

// 모범답안
function best(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

// 메모
// reduce에 대해서 알아보고 그때 받아오는 매개변수들도 확인
// sort에서 내림차순 오름차순 방법
