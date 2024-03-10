function solution(brown, yellow) {
  let array = [];
  for (let i = yellow; yellow / i <= i; i--) {
    if (yellow % i === 0) {
      array.push([i, yellow / i]);
    }
  }

  for (let arr of array) {
    const brownNum = arr.reduce((sum, num) => (sum += num * 2), 0) + 4;
    if (brownNum === brown) {
      return arr.map((num) => num + 2);
    }
  }
}

solution(10, 2);

// 모범답안
function solution(brown, yellow) {
  for (var i = 3; i <= (brown + yellow) / i; i++) {
    var x = Math.floor((brown + yellow) / i);
    if ((x - 2) * (i - 2) === yellow) {
      break;
    }
  }

  return [x, i];
}

// 메모
// reduce 사용법 익히기
