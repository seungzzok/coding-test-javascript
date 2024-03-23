// 풀이1
function solution(elements) {
  const sumSet = new Set();
  const len = elements.length;

  // 더하는 인자의 개수 (1~5)
  for (let n = 1; n <= len; n++) {
    let sum = 0;

    // 더하는 것을 시작하는 index (0~4)
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        for (let k = 0; k < n; k++) {
          sum += elements[k];
        }
      } else {
        sum -= elements[j - 1];
        sum += elements[(j + n - 1) % len];
      }
      sumSet.add(sum);
    }
  }

  return sumSet.size;
}

// 풀이2
// 설명: 순환하는 수열인 경우 두개를 붙여서 계산, 개수만큼 더하는 것이 아니라 시작지점에서 나올 수 있는 모든 합을 한번에 계산...
function solution(elements) {
    const circular = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circular[i + j];
            set.add(sum);
        }
    }
    return set.size;
}

// 풀이3
// 설명: 동일하게 수열 두개를 붙여서 계산, slice를 통해서 자르고 reduce로 한번에 전부 계산 (이것도 효율적이네..)
function solution(elements) {
    const answer = new Set();
    const LEN = elements.length;

    elements = elements.concat(elements);

    for (let len = 1; len <= LEN; len++) {
        for (let index = 0; index < LEN; index++) {
            const total = elements.slice(index, index + len).reduce((prev, curr) => prev + curr, 0);
            answer.add(total);
        }
    }

    return answer.size;
}

// 메모
// 중복인 배열을 제거해야하는 문제의 경우 반드시 Set()을 사용해서 풀이하기!!
// 배열로도 값을 낼 수는 있지만 시간초과로 안됨
// "슬라이딩 윈도우 알고리즘" 공부하기
// 연속되는 수열의 경우 두 배열을 붙여서 계산하는 방법이 훨씬 효율적이넹
